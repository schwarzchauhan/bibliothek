const express = require("express")
const router = express.Router()

const mcqController = require('../controller/mcqController')

router
    .route('/mcq/save')
    .post(mcqController.saveMcq)

module.exports = router;