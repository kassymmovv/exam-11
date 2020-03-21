const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price:{
      type:String,
      required:true
    },
    image:String,
    description: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;