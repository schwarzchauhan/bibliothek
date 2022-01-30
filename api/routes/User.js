const express = require("express")
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        res.send('GET user');     
    })
    .post((req, res) => {
        console.log(req.body);
        res.send('ok')
    })


module.exports = router