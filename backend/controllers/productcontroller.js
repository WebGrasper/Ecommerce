const ProductModel = require("../Models/productModel");

//Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await ProductModel.create(req.body);
    console.log(product);
    res.status(201).json({
        success: true,
        product
    });
}

//Get all products.
exports.getAllProducts = async (req, res) => {
    const product = await ProductModel.find();
    res.status(200).json({
        success: true,
        product
    });
}

//Update Products. --Admin
exports.updateProduct = async (req, res) => {

    let product = await ProductModel.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found !"
        })
    }
    
    product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

//Delete Product. --Admin

exports.deleteProduct = async(req,res,next) => {
    let product = await ProductModel.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found !"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message: "Product delete successfully !"
    })
}