const Product = require('../../models/product');

exports.getCart = (req, res, next) => {
    let id = req.params.id;
    let title = "";
    let price = 0;
    let description = "";
    let imgUrl = "";
    Product.findById(id).then(product => {
        title = product.title;
        price = product.price;
        description = product.description;
        imgUrl = product.imgUrl;
    })
        .then(result => {
            //console.log(title + price + description + imgUrl + id)
            res.render('pages/shop/cart', {
                pageTitle: 'Cart',
                path: '/cart',
                itemT: title,
                itemP: price,
                itemD: description,
                itemI: imgUrl,
                ID: id
            });
        })
        .catch(err => console.log(err));
}