const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')

router
    .route('/')
    .get((req, res) => {
        res.send('GET user');     
    })
    .post((req, res) => {
        console.error(req.body);
        res.send('ok')
    })

router
    .route('/login')
    .post(userController.user_login)

router
    .route('/dashboard/:username')
    .get(userController.getProfileInfo)


module.exports = router