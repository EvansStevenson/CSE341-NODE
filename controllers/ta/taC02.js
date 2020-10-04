//here
const userNames = [];
//const { post } = require("request");

exports.getTa02 = (req, res, next) => {
    res.render('../views/pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
        userNames: userNames,
        isNotFound: false,
        duplicate: false
    });
}

exports.postAddUser = (req, res, next) => {
    if (userNames.length > 0){
        userNames.forEach(item => {
            if (item === req.body.userName) {
                res.render('../views/pages/ta02', {
                    title: 'Team Activity 02',
                    path: '/ta02',
                    userNames: userNames,
                    isNotFound: false,
                    duplicate: true
                })
            }
            else {
                userNames.push(req.body.userName);
                res.render('../views/pages/ta02', {
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
        res.render('../views/pages/ta02', {
            title: 'Team Activity 02',
            path: '/ta02',
            userNames: userNames,
            isNotFound: false,
            duplicate: false
        }) 
    }
}

exports.postRemoveUser = (req, res, next) => {
    userNames.forEach(item => {
        if (item === req.body.removeName) {
            let postion = userNames.findIndex((item) => item === req.body.removeName);
            userNames.splice(postion, 1)
            res.render('../views/pages/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                userNames: userNames,
                isNotFound: false,
                duplicate: false
            })
        }
        else {
            res.render('../views/pages/ta02', {
                title: 'Team Activity 02',
                path: '/ta02',
                userNames: userNames,
                isNotFound: true,
                duplicate: false
            })
        }
    })
}

