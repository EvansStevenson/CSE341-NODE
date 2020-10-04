exports.getProve02 = (req, res, next) => {
    res.render('pages/prove02/addBook', { 
        title: 'Prove02', 
        path: '/prove02',
    });
}

exports.postProve02 =(req, res, next) => {
    //console.log(req.body.bookName)
    res.render('pages/prove02/display', {
        title: 'addBook',
        path: '/prove02', // For pug, EJS 
        BookName: req.body.bookName,
        Author: req.body.authorName,
        Summary: req.body.summary
    });
}