const Product = require('../../models/product');

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            //console.log(products);
            res.render('pages/shop/products', {
                pageTitle: 'Products',
                path: '/products',
                prods: products
            });
        })
        .catch(err => {console.log(err);})
}

