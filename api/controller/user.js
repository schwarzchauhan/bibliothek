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
            return res.send('user with this mail alrady exists -- '+u.name)
        }else {
            return res.send('let us store the user email and password')
        }

    } catch (err) {
        console.error(err);
        return res.send(err);
    }

}