const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'models',
    'prove03.json'
);

let gpus = [];

exports.getProve03 = (req, res, next) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log('Couldn\'t read JSON');
            return [];
        } else {
            gpus = JSON.parse(fileContent);
        }
    });

    res.render('pages/prove03/gpuStore', { 
        title: 'Prove03', 
        path: '/prove03',
        gpus: gpus
    });
}