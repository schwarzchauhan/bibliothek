const User = require('../models/user')


exports.user_register = async (req, res) => {

    try {
        console.error('req.body', req.body);
        const email = req.body.email;
        const password = req.body.password;
        console.error(email, password);
    
        const u = await User.findOne({email : email});   
        console.error(u);         
        
        if(u){
            console.error(u, u.name, u.email);         
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
        const data = req.body;
        if(!data.email){
            return res.json({
                type: 'knownError', 
                message : 'Oops, email field is required !' 
            })
        }
        if(!data.password){
            return res.json({
                type: 'knownError', 
                message : 'Oops, password field is required !' 
            })
        }
        return res.send('implement login in User model');
    }catch(err) {
        console.error(err);
    }
} 