const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type: String, 
        required: [true, 'provide email']
    }, 
    password : {
        type : String,
        required: [true, 'password not']
    }, 
    name: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;