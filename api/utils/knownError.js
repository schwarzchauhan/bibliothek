// class to handle known error(operational error)
// like invalid input, req.body
class KnownError extends Error {
    constructor(message, statusCode, errorpath){
        super(message)

        this.name = this.constructor.name;
        // this.message = message; // not required, already set in line 5
        this.statusCode = statusCode;
        this.errorpath = errorpath;

        Error. captureStackTrace(this, this.constructor)
        // console.error("knownerrorrr", this);
    }
}

module.exports = KnownError;