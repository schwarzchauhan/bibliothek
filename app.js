require('dotenv').config()


const express = require('express')
const app = express()

// specify all routers here
const userRoute = require('./routes/User')

app.use('/user', userRoute)

app.route('/')
    .get((req, res)=> {
        res.status(200).send('ok')
    });

module.exports = app;