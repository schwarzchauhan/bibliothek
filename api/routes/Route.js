const express = require("express")
const router = express.Router()

const mcqController = require('../controller/mcqController')

router
    .route('/mcq/save')
    .post(mcqController.saveMcq)

router
    .route('/quiz/:lang/:noOfMcqs')
    .get(mcqController.randomMcqs)


module.exports = router;