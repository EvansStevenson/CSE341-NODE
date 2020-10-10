// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const app = express();

const routes = require('./routes') //note: express auto adds index.js
const errorController = require('./controllers/404');
const { Mongoose } = require('mongoose');
const mongooseConnect = require(Mongoose);


const cors = require('cors'); // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://cse341-node.herokuapp.com/",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://masterlink0:thisisevanspassword@cse341shop.mud7h.mongodb.net/<dbname>?retryWrites=true&w=majority";
                        


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser({extended: false})); // For parsing the body of a POST
//app.get('/', routes);
app.use('/', routes);
app.use(errorController.get404);

mongooseConnect.connect("mongodb+srv://masterlink0:thisisevanspassword@cse341shop.mud7h.mongodb.net/shop?retryWrites=true&w=majority", options);
mongooseConnect.then(result => {
     // This should be your user handling code implement following the course videos
     app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch(err => {
    console.log(err);
  });





