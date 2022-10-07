const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const UserModel = require("../Models/userModel");

//Register user.

exports.registerUser = catchAsyncError( async(req,res,next) => {
    const {name,email,password} = req.body;

    const user = await UserModel.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilePicUrl"
        }
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token,
    })
})

//Login user.
exports.loginUser = catchAsyncError(async(req,res,next) => {
    const {email,password} = req.body;

    //Checking if user has given password and email both.
    if(!email || !password){
        return next(new ErrorHandler("Please enter email & password",400));
    }

    //Query for checking details of a user.
    const user = await UserModel.findOne({email}).select("+password");

    //Suppose user is not available in DB.
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }


    //comparing password with stored password.
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        // console.log("checking very fast")
        return next(new ErrorHandler("Invalid email or password"),401);
    }
    //If matched then will generate a token for login.
    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        token,
    })

})