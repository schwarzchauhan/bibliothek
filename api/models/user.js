const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const userSchema = new Schema({
    email : {
        type: String, 
        required: [true, 'provide email'],
        unique: true // `email` must be unique
    }, 
    password : {
        type : String,
        required: [true, 'password not']
    }, 
    name: {
        type: String
    }, 
    username: {
        type: String
    }, 
    token : { type: String }
})

// https://mongoosejs.com/docs/guide.html#statics
// mongoose statics method 
userSchema.statics.user_login = async function (data) {
    try {
        var user;
        if(data.type == 'email'){
            user = await this.findOne({email: data.unameEmail});
        }else if(data.type == 'username'){
            user = await this.findOne({username: data.unameEmail});
        }else {
            throw new SyntaxError('Oops! Something fishy while login.');  
        }   

        if (user && (await bcrypt.compare(data.password, user.password))){
            var token = jwt.sign({userId: user._id.toString()}, process.env.authKey)
            user.token=token;
            return userFilter(user)
        }else {
            return null;
        }
    } catch (err) {
        throw err;
    }
}

userSchema.statics.getProfileInfo = async function (input) {
    try {
        console.error({username: input.username});
        var profileData = await this.findOne({username: input.username}, {imgUrl: 1, name: 1, username: 1});
        console.error("profileData  DB ", profileData);
        return profileData;
    } catch (err) {
        console.error("err", err );
        console.error(err instanceof SyntaxError, err.message, err.name, err.stack);
        throw err;
    }
}

var userFilter = (userObj) => {
    var {email, _id, token, username} = userObj;
    return {email, _id, token, username};
}

const User = mongoose.model('User', userSchema);
module.exports = User;