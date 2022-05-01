const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const KnownError = require('../utils/knownError')

const mcqSchema = new Schema({
    quesn : {
        type: String, 
        required: [true, 'question required']
    }, 
    choices : {
        type : [{
            type: String
        }],
        required: [true, 'choices can not be empty']
    }, 
    ans: {
        type: String, 
        required: [true, 'answer required']
    }
})

// https://mongoosejs.com/docs/guide.html#statics
// mongoose statics method 
mcqSchema.statics.saveMcq = async function (input) {
    try {
        // console.error('input == mdl', input);
        const isMcqExist = await Mcq.findOne({quesn: input.quesn});
        if(isMcqExist){
            // console.warn("Mcq already exists!!", "mcqController saveMcq");
            throw new KnownError("Mcq already exists!!", 400, "mcqController saveMcq");
        }
        var newMcq = new Mcq(input);
        const savedMcq = await newMcq.save();
        // console.error('savedMcq', savedMcq);
        return savedMcq;
    } catch (err) {
        // console.error("model err", err instanceof Error, err.message, err.name, err.stack);
        throw err;
    }
}

const Mcq = mongoose.model('Mcq', mcqSchema);
module.exports = Mcq;