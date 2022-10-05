const ProductModel = require("../Models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncHandler = require("../middleware/catchAsyncError");
const ApiFeature = require("../utils/apifeatures");

//Create Product -- Admin
exports.createProduct = catchAsyncHandler(async (req, res, next) => {
    const product = await ProductModel.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

//Get all products.
exports.getAllProducts = catchAsyncHandler(async (req, res) => {
    const apiFeature = new ApiFeature(ProductModel.find(), req.query).search();
    const product = await apiFeature.query;
    res.status(200).json({
        success: true,
        product
    });
});

//Get Product details
exports.getProductDetails = catchAsyncHandler(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });

//Update Products. --Admin
exports.updateProduct = catchAsyncHandler(async (req, res, next) => {

    let product = await ProductModel.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
});

//Delete Product. --Admin

exports.deleteProduct = catchAsyncHandler(async (req, res, next) => {
    let product = await ProductModel.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product delete successfully !"
    })
});