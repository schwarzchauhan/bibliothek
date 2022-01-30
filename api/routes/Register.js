const express = require("express");
const router = express.Router()

const userController = require('../controller/user')

router
    .route('/')
    .post(userController.user_register)

module.exports = router;