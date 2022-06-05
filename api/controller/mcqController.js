const Mcq = require('../models/mcq')

exports.saveMcq = async (req, res, next) => {

    try {
        const input = req.body;
        const inputObj = {
            quesn :  input.quesn, 
            choices : input.choices,
            ans: input.ans
        }
        // console.error("inputObj ~~ ", inputObj);
        const mcqObj = await Mcq.saveMcq(inputObj);
        // console.error('mcqObj==', mcqObj,typeof mcqObj);
        // save the input in  the mcq model
        return res.json(mcqObj);    
    } catch (err) {
        // console.error('#', err);
        // return res.status(400).json(err);
        next(err);
    }

}


exports.randomMcqs = async (req, res, next) => {
    try {
        const args = req.params;
        console.error('args',args);
        // typecasting, to fix "MongoServerError: size argument to $sample must be a number"
        const noOfMcqs = Number(args.noOfMcqs) 
        console.error(typeof noOfMcqs);

        // https://mongoosejs.com/docs/api/aggregate.html#aggregate_Aggregate-sample
        // https://www.mongodb.com/docs/upcoming/reference/operator/aggregation/sample/#pipe._S_sample
        // https://stackoverflow.com/questions/14644545/random-document-from-a-collection-in-mongoose
        const quiz = await Mcq.aggregate([{ $sample: { size: noOfMcqs } }]);
        quiz.forEach(e => {
            console.log(e._id);
        });
        return res.json(quiz);
    } catch (err) {
        next(err);
    }
}

exports.submitMcqQuiz  = async (req, res, next) => {
    try {
        console.error('submitMcqQuiz', req.body);
        const quesWithAnsGiven = req.body; //  array with each element as obj {_id, ansGiven}, where ansGiven is selected choice
        // TODO : check what happen is quesWithAnsGiven is not an array, thought it will always be an array 
        const mcqIds = quesWithAnsGiven.map( (ele) => ele._id ) // array of mcq ids
        console.error('mcqIds',mcqIds);
        const  mcqs = await Mcq.find({_id: {$in: mcqIds}}); // order of mcq in array is not same as that mcq sent in request
        const response = mcqs.map((mcq, i) => {
            var foundMcq = quesWithAnsGiven.find( ele => ele._id == mcq._id.toString());
            return {
                _id: mcq._id,
                quesn:  mcq.quesn,
                choices: mcq.choices, 
                ans: mcq.ans,
                ansGiven: foundMcq.ansGiven,
                isCorrect: (mcq.ans == foundMcq.ansGiven)
            } 
        })
        console.error(response.length);

        return res.status(200).json(response)

        // https://javascript.plainenglish.io/most-efficient-ways-for-building-pdfs-files-with-backend-and-frontend-javascript-environment-68056f73257
        // https://www.npmjs.com/package/chrome-aws-lambda
        // https://www.tabnine.com/code/javascript/functions/puppeteer/Page/setContent
        // const pdfBuffer = await createPdf.createPdf();

        // res.set("Content-Type", "application/pdf");
        // res.set("Content-Disposition", 'attachment; filename="My-report.pdf"');
        // return res.status(200).json(pdfBuffer)
    } catch (err) {
        next(err)
    }
}