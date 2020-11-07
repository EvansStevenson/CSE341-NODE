const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
const cartController = require("../../controllers/shop/cart");

router.get('/:id', cartController.getCart);
router.post('/removeCart', cartController.postCartDelete);
module.exports = router;