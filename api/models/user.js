const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
    }
})

// https://mongoosejs.com/docs/guide.html#statics
// mongoose statics method 
userSchema.statics.user_login = async function (data) {
    try {
        if(data.type == 'email'){
            return this.findOne({email: data.unameEmail, password: data.password});
        }
        else if(data.type == 'username'){
            return this.findOne({username: data.unameEmail, password: data.password});
        }else {
            throw new SyntaxError('Oops! Something fishy while login.');  
         }        
    } catch (err) {
        console.error(err instanceof SyntaxError, err.message, err.name, err.stack);
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

const User = mongoose.model('User', userSchema);
module.exports = User;