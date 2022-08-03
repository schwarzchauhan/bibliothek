const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const KnownError = require('../utils/knownError')

const flagSchema = new Schema({
    imgUrl : {
        type: String, 
        required: [true, 'img Url required']
    }, 
    farbe : {
        type : [{
            type: String
        }],
        required: [true, 'color required']
    }, 
    artikel: {
        type: String, 
        required: [true, 'article required']
    }, 
    land: {
        type: String, 
        required: [true, 'language required']
    }, 
    country : {
       type: String, 
       required: [true, 'country name in english required'] 
    }
})

// https://mongoosejs.com/docs/guide.html#statics
// mongoose statics method 
flagSchema.statics.getFlags = async function () {
    try {
        var flags  = await this.find({})

        return flags;
    } catch (err) {
        // console.error("model err", err instanceof Error, err.message, err.name, err.stack);
        throw err;
    }
}

const Flag = mongoose.model('Flag', flagSchema);
module.exports = Flag;