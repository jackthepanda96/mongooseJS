module.exports = (mongooseObj) =>{
    const userSchema = new mongooseObj.Schema({
        name: String,
        alamat: String,
        hp: String,
    });

    const user = new mongooseObj.model('users', userSchema);

    return user;
}