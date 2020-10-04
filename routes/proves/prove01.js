const express = require('express');
const router = express.Router();
const prove01Controller = require("../../controllers/proves/prove01");

router.get('/',prove01Controller.getProve01);

router.post('/submit', prove01Controller.postProve01);

module.exports = router;