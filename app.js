require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// db setup
const mongoose = require('mongoose')
const MONGODB_URL = require('./config/key').MONGODB_URL;
mongoose.connect(
            MONGODB_URL, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology : true
            }, 
            (err, res) => {
                if(!err){
                    console.error('db connected');
                }else {
                    console.log(err);
                    return err;
                }
            }
        )            


// to handle post request
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//
const corsOptions = {
    origin: process.env.FRONTEND_HOST, 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// console.log(corsOptions);
app.use(cors(corsOptions))


// specify all routers here
const userRoute = require('./api/routes/User')
const registerRoute = require('./api/routes/Register')

app.use('/api/user', userRoute)
app.use('/api/register', registerRoute)

app.route('/')
    .get((req, res)=> {
        res.status(200).send('ok')
    });

module.exports = app;