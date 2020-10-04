const express = require('express');
const router = express.Router();
const prove02Controller = require("../../controllers/proves/prove02");
router.get('/', prove02Controller.getProve02);
router.post('/addBook', prove02Controller.postProve02);
module.exports = router;