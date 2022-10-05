const ErrorHandler = require('../utils/errorhandler');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";

    //MonngoDB error
    if(err.name == "CastError"){
        const message = `Resource not Found, invalid ${err.path}`
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        status: false,
        error: err
    })
}