const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')
const deController = require('../controller/deController')

router
    .route('/user/login')
    .post(userController.user_login)

router
    .route('/user/register')
    .post(userController.user_register)

router
    .route('/flagge')
    .get(deController.getFlags)

module.exports = router