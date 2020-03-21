const mongoose = require('mongoose');
const config = require('./config');
const Category = require('./models/Category');
const Product = require('./models/Product');
const User = require('./models/User');
const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [cpus, hdds, gpus] = await Category.create({
        title: 'CPUs',
        description: 'Central Processing Units'
    }, {
        title: 'HDDs',
        description: 'Hard Disk Drives'
    }, {
        title: 'GPUs',
        description: 'Video cards'
    });
   const [qwwqwq,wssd3d] = await User.create({
        username:'Ayan',
        password:'1234',
        displayName:'Assa',
        phoneNumber:'23333',
        token:'12234432dsd32',

    },{
        username:'Ayancho',
        password:'12345',
        displayName:'Aka',
        phoneNumber:'05555',
        token:'12234432d2214',
    });
    await Product.create({
        title: 'Intel Core i7',
        price: 400,
        category: cpus,
        image: 'fixtures/cpu.jpeg',
        user:qwwqwq

    }, {
        title: 'Seagate Barracuda 2TB',
        price: 70,
        category: hdds,
        image: 'fixtures/hdd.jpeg',
        user:qwwqwq

    }, {
        title: 'ASUS Geforce RTX 2080Ti',
        price: 1000,
        category: gpus,
        image: 'fixtures/gpu.jpeg',
        user:wssd3d

    });

    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});