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