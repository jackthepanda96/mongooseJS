module.exports = (mongooseObj) =>{
    const categorySchema = new mongooseObj.Schema({
        categoryName: String,
        isAdult: Boolean
    });

    const category = new mongooseObj.model('categories', categorySchema);

    
    return category;
}