const express = require("express")
const router = express.Router()

const mcqController = require('../controller/mcqController')
const uploadsController = require('../controller/uploadsController')

router
    .route('/mcq/save')
    .post(mcqController.saveMcq)

router
    .route('/quiz/:lang/:noOfMcqs')
    .get(mcqController.randomMcqs)

router
    .route('/quiz/submit')
    .post(mcqController.submitMcqQuiz)

router
    .route('/upload/img')
    .post(uploadsController.imgUpload)

module.exports = router;