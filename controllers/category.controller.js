const db = require('../models');
const category = db.categories;

exports.insert = async() => {
    let data = new category({categoryName: "Comedy", isAdult: false,});
    await data.save().then((_) => console.log('success insert')).catch(error => console.error(error));
}