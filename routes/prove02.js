const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove02/addBook', { 
        title: 'Prove02', 
        path: '/prove02',
    });
});

router.post('/addBook', (req, res, next) => {
    //console.log(req.body.bookName)
    res.render('pages/prove02/display', {
        title: 'addBook',
        path: '/prove02', // For pug, EJS 
        BookName: req.body.bookName,
        Author: req.body.authorName,
        Summary: req.body.summary

    });
});

module.exports = router;