require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

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
const userRoute = require('./routes/User')

app.use('/api/user', userRoute)

app.route('/')
    .get((req, res)=> {
        res.status(200).send('ok')
    });

module.exports = app;