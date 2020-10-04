const routes = require('express').Router();

const ta01 = require('./ta01');
const ta02 = require('./ta02');
//const ta03 = require('./ta03'); I did not drive this team activity. Another member of my team has the code for this. 

routes.use('/ta01', ta01);
routes.use('/ta02', ta02);
//routes.use('/ta03', ta03);

module.exports = routes;