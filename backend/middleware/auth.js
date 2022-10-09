const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");


exports.isAuthenticatedUser = catchAsyncError(async(req,res,next) => {

    //Getting current loggedIn user token which would be store in cookies.
    const {token} = req.cookies;
    // console.log(token);
   if (!token) {
        return next(new ErrorHandler("Please login to access this resource",401));
    }

    //verifying decoded data with jwt_secret token.
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    //extracting ID from decodedData, which we have already pass in "getJWTToken" function.
    req.user = await userModel.findById(decodedData.id);

    next();

});

exports.authorizeRoles = (...roles) => {
    return (req,res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(
                `Role: ${req.user.role} is not allowed to access this resource`,403
            ));
        }
        next();
    }
}