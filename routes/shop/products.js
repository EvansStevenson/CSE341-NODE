const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
const productsController = require("../../controllers/shop/products");

router.get('/', productsController.getProducts);
//router.post('/submit', adminController.postAddProduct);

module.exports = router;