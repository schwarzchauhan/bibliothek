const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')

router
    .route('/user/login')
    .post(userController.user_login)

router
    .route('/user/register')
    .post(userController.user_register)

module.exports = router