const express = require('express');
const router = express.Router();
const prove09Controller = require("../../controllers/proves/prove09");
router.get('/', prove09Controller.getProve08);

module.exports = router;