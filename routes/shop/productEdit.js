const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
const editController = require("../../controllers/shop/admin");

router.get('/:id', editController.getEditPage);
router.post('/edit', editController.postEditProduct);
router.post('/delete', editController.postDeleteProduct);
//router.post('/submit', adminController.postAddProduct);

module.exports = router;