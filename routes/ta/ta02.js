//TA02 
const express = require('express');
const routes = express.Router();
const ta02Controller = require("../../controllers/ta/taC02"); //connect to file in controllers that this route leads to

routes.get('/', ta02Controller.getTa02);
routes.post('/addUser', ta02Controller.postAddUser);
routes.post('/removeUser', ta02Controller.postRemoveUser);

module.exports = routes;