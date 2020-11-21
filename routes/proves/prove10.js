const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../../models/ta10-data.json')

router.get('/', (req, res, next) => {
    res.render('pages/prove10/prove10', {
        title: 'Prove 10',
        path: '/prove/10',
        data: dummyData
    });
});

//lol no thanks 
router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
let newItem = req.body.newHero;
let checkDuplicates = false;
for (let data of dummyData.avengers){
    if (data.name === newItem){
        checkDuplicates = true;
    }
}
if (checkDuplicates === false){
    dummyData.avengers.push({name: newItem, gender: req.body.gender});
    console.log(dummyData);
}
res.redirect('/proves/prove10')
});
module.exports = router;