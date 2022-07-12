const User = require('../models/user')
var bcrypt = require('bcryptjs')
const KnownError = require('../utils/knownError')
const Nodemailer = require('../service/Nodemailer')



// {"unameEmail":"harshchauhan0994@gmail.com","password":"kljs;ladfj","type":"email"}
exports.user_register = async (req, res, next) => {

    try {
        // console.error('req.body', req.body);
        const { email, password, name, username } = req.body;
        // console.error(email, password);
    
        // check for mandatory field
        if(!(email && password)){
            throw new KnownError("Credentials missing", 400, "userController user_register");
        }
        
        const u = await User.findOne({ $or: [{ username: username }, { email: email }] });
        // console.error(u);         
        
        if(u && u.email == email) {
            throw new KnownError(`User Already Exist. Please Login`, 400, "userController user_register");        
        }
        if(u && u.username == username) {
            throw new KnownError(`Username already used!`, 400, "userController user_register");        
        }
        //Encrypt user password
        // https://www.npmjs.com/package/bcryptjs#hashs-salt-callback-progresscallback
        // https://www.loginradius.com/blog/engineering/hashing-user-passwords-using-bcryptjs/
        var salt = await bcrypt.genSalt(10);
        var encryptedPassword = await bcrypt.hash(password, salt);
        const newUser = {
            email,
            password: encryptedPassword, 
            name,
            username
        };
        const user = await User.create(newUser)
        Nodemailer.sendMail({
            to: user.email, 
            text: `Dear  ${user.name}, 
            Congratulations! Your registered account has been activated successfully!!. 
            Your account username @${user.username}. 
            Please login to the Passport Seva website using the Login Id: ${user.email}.
            Thank you for registering with bibliothek. 
            Best regards,
            Schwarz Bibliothek Team
            Note: This is a system generated e-mail, please do not reply to it.
            *** This message is intended only for the person or entity to which it is addressed and may contain confidential and/or privileged information. If you have received this message in error, please notify the sender immediately and delete this message from your system ***` 
        })

        return res.json(user)

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