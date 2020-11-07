const { populate } = require('../../models/product');
const Product = require('../../models/product');

exports.getCart = (req, res, next) => {
    const prodId = req.params.id;
    Product.findById(prodId)
    .then(product =>{
        //console.log(product);
        return req.user.addToCart(product);
    })
    .then(result => {
        //console.log("no error" + result);
        req.user.populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            console.log("is this going to work: " + user.cart.items);
            res.render('pages/shop/cart', {
               cartItems: user.cart.items,
               path: '/admin'
            });
        })
        
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postCartDelete = (req, res, next) => {
    const productId = req.body.itemId;
    console.log("wait this worked= " + productId);
    req.user   
        .removeFromCart(productId)
    res.redirect('pages/shop/cart')
};