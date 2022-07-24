const Flag = require('../models/flag')
const KnownError = require('../utils/knownError')


exports.getFlags = async (req, res, next)=> {
    try {
        var flags = await Flag.getFlags();
        return res.status(200).json(flags);
    } catch (error) {
        next(error)
    }
}

exports.getFlgsByStringSrch = async (req, res, next) => {
    try {
        var {field, country} = req.body;
        const regex = new RegExp(country, 'i'); // i flag for case insensitive search
        // https://stackoverflow.com/questions/20310545/is-there-a-way-to-use-a-variable-for-the-field-name-in-a-find-in-mongoose
        var flags  = await Flag.find({[field]: {$regex: regex}})
        return res.status(200).json(flags);
    } catch (error) {
        next(error)
    }
}