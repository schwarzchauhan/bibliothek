const jwt = require('jsonwebtoken')
const KnownError = require('../utils/knownError')

const verifyToken = async (req, res, next) => {
    try {
        const token  = req.headers["x-access-token"]
        if(!token)
            throw new KnownError("Authentication token required!", 401,"middleware auth")
        const decoded = jwt.verify(token, process.env.authKey)
        console.error('============================');
        console.error(decoded);
        req.user = decoded
        console.error(req.body, req.headers, req.user);
        return next()
    } catch (err) {
        console.error(err);
        if( err.constructor.name == 'JsonWebTokenError' && err.message == 'invalid signature' ) {
            next(new KnownError("Authentication token expired, Login Again!!", 401, "middleware auth"));
        } else if ( err.constructor.name == 'JsonWebTokenError' && err.message == 'jwt malformed' ) {
            next(new KnownError("Authentication token required, Login Again!!", 401, "middleware auth"));
        } else {
            next(err)
        }
    }
}

module.exports = verifyToken