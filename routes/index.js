

const routes = require('express').Router();
//const models = require('./models');
const ta = require('./ta');
const proves = require('./proves');
const { getHomePage } = require('../controllers/home');

routes.get('/', getHomePage);
routes.use('/ta', ta);
routes.use('/proves', proves);

module.exports = routes;