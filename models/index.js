const mongoose = require('mongoose');

try{
    var conn = mongoose.connect('mongodb+srv://username:password@copas_dari_atlas/nama_db');
}catch(e){
    console.error(e);
}

const db = {};
db.mongoose = conn;

db.users = require('./users.model')(mongoose);
db.categories = require('./category.model')(mongoose);

module.exports = db;