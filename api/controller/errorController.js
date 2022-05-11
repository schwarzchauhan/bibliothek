// error handler for operational errors
// e.g. - invalid req.body in POST request
// returns Internal server error(500) if the err is not an instance of KnownError class
module.exports = (err, req, res, next) => {
    if(!err){
        next();
    }
    // console.error(err.name =="KnownError", err.name, err.message, err.statusCode, err.errorpath, err.stack);
    console.error(err.stack);
    console.table(err);
    if(err.name =='KnownError'){
        return res.status(err.statusCode).json({type: 'KnownError', message : err.message})
    }else {
        return res.status(500).json({message : 'Oops! Internal Server Error Occurred.'})
    }
}