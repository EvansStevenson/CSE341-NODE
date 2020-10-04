// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const app = express();

const routes = require('./routes') //note: express auto adds index.js
const errorController = require('./controllers/404');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser({extended: false})); // For parsing the body of a POST
//app.get('/', routes);
app.use('/', routes);
app.use(errorController.get404);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
