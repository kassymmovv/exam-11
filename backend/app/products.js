const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');

const Product = require('../models/Product');
const User = require('../models/User');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await Product.find().populate('user');
    res.send(items);
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Product.find({category:req.params.id}).populate('user');

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});
router.get('/product/:id', async (req, res) => {
    try {
        const item = await Product.findOne({_id:req.params.id}).populate('user');

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});
router.delete('/:id',  async (req, res) => {
    const token = req.get('Authorization').split(' ')[1];
    try {
        const item = await Product.findOne({_id:req.params.id});

        await Product.deleteOne({_id: req.params.id,user:item.user});
        res.send("Deleted");
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    const productData = req.body;
    if (req.file) {
        productData.image = req.file.filename;
    }


    try {
        const token = req.get('Authorization').split(' ')[1];
        const user = await User.findOne({token});
        productData.user = user._id;
        const post = new Product(productData);
        await post.save();

        return res.send({id: post._id});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;