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
