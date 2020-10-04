exports.getProve01 = (req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove01', 
        path: '/prove01',
        activeTA03: true,
        contentCSS: true, 
    });
}

exports.postProve01 =(req, res, next) => {
    console.log(req.body.inputOne);
    res.render('pages/prove01/display', { 
        title: 'Prove01', 
        path: '/prove01',
        activeTA03: true,
        contentCSS: true, 
        InputOne: req.body.inputOne,
        InputTwo: req.body.inputTwo
       
    });
}