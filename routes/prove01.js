const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove01', 
        path: '/prove01',
        activeTA03: true,
        contentCSS: true, 
    });
});

router.post('/submit',(req, res, next) => {
    console.log(req.body.inputOne);
    res.render('pages/prove01/display', { 
        title: 'Prove01', 
        path: '/prove01',
        activeTA03: true,
        contentCSS: true, 
        InputOne: req.body.inputOne,
        InputTwo: req.body.inputTwo
       
    });
});

module.exports = router;