const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productcontroller');
const isAuthunticatedUser = require('../middleware/auth');

const router = express.Router();

router.route("/products").get(isAuthunticatedUser, authorizeRoles("admin"), getAllProducts);
router.route("/products/new").post(isAuthunticatedUser,createProduct);
router.route("/products/:id").put(isAuthunticatedUser,updateProduct).delete(isAuthunticatedUser,deleteProduct).get(getProductDetails);

module.exports = router;