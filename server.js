const mongoose = require('mongoose');
const db = require('./models');
const categoryControll = require('./controllers/category.controller');

(async () => {
    console.log('Hello World');
    
    // const listUsers = await db.users.find();
    // console.log(listUsers);

    await categoryControll.insert();
    mongoose.connection.close();
})();