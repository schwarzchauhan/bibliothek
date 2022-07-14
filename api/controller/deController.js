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