const User = require('../models/user')



// {"unameEmail":"harshchauhan0994@gmail.com","password":"kljs;ladfj","type":"email"}
exports.user_register = async (req, res) => {

    try {
        // console.error('req.body', req.body);
        const email = req.body.email;
        const password = req.body.password;
        // console.error(email, password);
    
        const u = await User.findOne({email : email});   
        // console.error(u);         
        
        if(u){
            console.error(u);         
            return res.send('user with this mail already exists -- '+u.name)
        }else {
            return res.send('let us store the user email and password')
        }

    } catch (err) {
        console.error(err);
        return res.send(err);
    }

}

exports.user_login = async (req, res) => {
    try {
        // console.log(req);
        const data = req.body;
        // console.log(data);
        // const data = req.body;
        // console.log(data);
        if(!data.type){
            return res.status(400).json({message:  'Oops! Login request is malformed. !'});
        }
        if(!data.unameEmail){
            return res.json({type: 'knownError', message : 'Oops, Email or username is required !' });
        }
        if(!data.password){
            return res.json({type: 'knownError', message : 'Oops, password field is required !' });
        }
        const userData = await User.user_login(data);
        console.table( userData);
        if(!userData){
            return res.status(401).json({type: 'knownError', message : 'Oops, Invalid Credentials !' });
        }
        return res.json(userData);
    }catch(err) {
        console.error('err', err);
        if(err instanceof SyntaxError){
            return res.status(422).json({type: 'knownError', message: err.message});
        }else {
            return res.status(404).json({type: 'knownError', message: 'Oops! Unexpected error while login.'});
        }
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