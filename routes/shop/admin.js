const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
const adminController = require("../../controllers/shop/admin");

router.get('/', adminController.getAddProduct);
router.post('/submit', adminController.postAddProduct);
router.post('/edit', adminController.postEditProduct);
module.exports = router;