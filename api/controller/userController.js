const User = require('../models/user')
var bcrypt = require('bcryptjs')
const KnownError = require('../utils/knownError')



// {"unameEmail":"harshchauhan0994@gmail.com","password":"kljs;ladfj","type":"email"}
exports.user_register = async (req, res, next) => {

    try {
        // console.error('req.body', req.body);
        const { email, password } = req.body;
        // console.error(email, password);
    
        // check for mandatory field
        if(!(email && password)){
            throw new KnownError("Credentials missing", 400, "userController user_register");
        }
        
        const u = await User.findOne({email : email});   
        // console.error(u);         
        
        if(u){
            throw new KnownError(`User Already Exist. Please Login`, 400, "userController user_register");        
        }else {
            //Encrypt user password
            // https://www.npmjs.com/package/bcryptjs#hashs-salt-callback-progresscallback
            // https://www.loginradius.com/blog/engineering/hashing-user-passwords-using-bcryptjs/
            var salt = await bcrypt.genSalt(10);
            var encryptedPassword = await bcrypt.hash(password, salt);
            const newUser = {
                email: email,
                password: encryptedPassword
            };
            const user = await User.create(newUser)
            console.error(user);
            return res.send('let us store the user email and password')
        }

    } catch (err) {
        next(err);
    }

}

exports.user_login = async (req, res, next) => {
    try {
        // console.log(req);
        const { type, unameEmail, password } = req.body;
        // console.log(data);
        // const data = req.body;
        // console.log(data);

        if(!(type && unameEmail && password)){
            throw new KnownError(`Credentials Missing`, 400, "userController user_login")
        }
        var obj = {unameEmail: req.body.unameEmail, password:req.body.password, type: req.body.type}
        const userData = await User.user_login(obj);
        if(!userData){
            throw new KnownError(`Oops, Invalid Credentials !`, 401, "userController user_login")
        }
        return res.json(userData);
    }catch(err) {
        next(err)
    }
} 

exports.getProfileInfo = async (req, res)=> {
    try {
        console.error("req.params ~~ ", req.params);
        if(!req.params.username){
            return res.status(404).json({type: 'knownError', message: 'Oops! Username is required.'});
        }
        console.error("/[a-z]/.test(req.params.username",  /[a-z]/.test(req.params.username));
        if(!/[a-z]/.test(req.params.username)){ // to validate the username
            return res.status(404).json({type: 'knownError', message: 'Oops! Username is invalid.'});
        }
        var input = {username: req.params.username};
        var profileData = await User.getProfileInfo(input);
        console.error("profileData", profileData);
        return res.status(200).json(profileData);
    } catch (error) {
        console.error(error);
        console.error("error while getting  profile data", input);
        return res.status(404).json({type: 'knownError', message: 'Oops! Unexpected error occurred.'});
    }
}