//const routes = require('express').Router();

//const admin = require('./admin');

//routes.use('/admin', admin);

//module.exports = routes;

const routes = require('express').Router();

const admin = require('./admin');
const products = require('./products');
const productEdit = require('./productEdit');
const cart = require('./cart');

routes.use('/admin', admin);
routes.use('/products', products);
routes.use('/productEdit', productEdit);
routes.use('/cart', cart);

module.exports = routes;
 