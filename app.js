require('dotenv').config()


const express = require('express')
const app = express()

app.route('/')
    .get((req, res)=> {
        res.status(200).send('ok')
    })

module.exports = app;