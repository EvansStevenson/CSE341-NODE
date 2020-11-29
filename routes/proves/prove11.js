const router = require('express').Router()
const data = require('../../models/ta11-data.json');

router
    .get('/', (req, res) => {
        res.render('pages/prove11/prove11', {
            title: 'Prove Assignment 11',
            path: '/prove/11'
        })
    })
    .get('/fetchAll', (req, res) => {
        res.json(data)
    })
    .post('/insert', (req, res) => {
        const { name } = req.body
        //console.log(req.body);
        
        if (!data.avengers.some(a => a.name === name))
            data.avengers.push({ name })
        res.json(data)
    })

module.exports = router