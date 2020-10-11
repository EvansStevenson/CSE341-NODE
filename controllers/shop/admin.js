const Product = require('../../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('pages/shop/admin', {
      pageTitle: 'Add Product',
      path: '/admin',
    });
};

exports.postAddProduct =(req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imgUrl = req.body.imgUrl;
  const product = new Product({title: title, description: description, price: price, imgUrl: imgUrl});
  product.save()
    .then(result => {
      console.log("created Product");
      res.redirect("/shop/products");
    })
    .catch(err => {console.log(err);
    });
}

exports.getEditPage = (req, res, next) => {
  let title = "";
  let price = 0;
  let description = "";
  let imgUrl = "";
  let id = req.params.id;
  Product.findById(id).then(product => {
    title = product.title;
    price = product.price;
    description = product.description;
    imgUrl = product.imgUrl;
  })
  .then(result =>{
    //console.log(title + price + description + imgUrl + id)
    res.render('pages/shop/productEdit', {
      pageTitle: 'Add Product',
      path: '/admin',
      itemT: title,
      itemP: price,
      itemD: description,
      itemI: imgUrl,
      ID: id
    });
  })
  .catch(err => console.log(err));
}

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imgUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId).then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imgUrl = updatedImageUrl;
    return product.save()
  })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/shop/products');
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.deleteId
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('REMOVED PRODUCT!' + prodId);
      res.redirect('/shop/products');
    })
    .catch(err => console.log(err));
};