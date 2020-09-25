//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const userNames = [];

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
        userNames: userNames,
        isNotFound: false,
        duplicate: false
    });
});

router.post('/addUser', (req, res, next) => {
    if (userNames.length > 0){
        userNames.forEach(item => {
            if (item === req.body.userName) {
                res.render('pages/ta02', {
                    title: 'Team Activity 02',
                    path: '/ta02',
                    userNames: userNames,
                    isNotFound: false,
                    duplicate: true
                })
            }
            else {
                userNames.push(req.body.userName);
                res.render('pages/ta02', {
                    title: 'Team Activity 02',
                    path: '/ta02',
                    userNames: userNames,
                    isNotFound: false,
                    duplicate: false
                })
            }
        });
    }
    else{
        userNames.push(req.body.userName);
        res.render('pages/ta02', {
            title: 'Team Activity 02',
            path: '/ta02',
            userNames: userNames,
            isNotFound: false,
            duplicate: false
        }) 
    }
})

    router.post('/removeUser', (req, res, next) => {
        userNames.forEach(item => {
            if (item === req.body.removeName) {
                let postion = userNames.findIndex((item) => item === req.body.removeName);
                userNames.splice(postion, 1)
                res.render('pages/ta02', {
                    title: 'Team Activity 02',
                    path: '/ta02',
                    userNames: userNames,
                    isNotFound: false,
                    duplicate: false
                })
            }
            else {
                res.render('pages/ta02', {
                    title: 'Team Activity 02',
                    path: '/ta02',
                    userNames: userNames,
                    isNotFound: true,
                    duplicate: false
                })
            }
        })

    });

    module.exports = router;