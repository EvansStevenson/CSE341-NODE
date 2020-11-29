// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const app = express();

const routes = require('./routes') //note: express auto adds index.js
const errorController = require('./controllers/404');
const mongoose = require('mongoose'); //this changed
const User = require('./models/user');

const io = require('socket.io')();

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

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://masterlink0:thisisevanspassword@cse341shop.mud7h.mongodb.net/shop?retryWrites=true&w=majority";

app.use((req, res, next) => {
  User.findById('5f87496ce44dd835ccf4248e')
  .then (user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(err));
})

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.get('/', routes);
app.use('/', routes);
app.use(errorController.get404);

mongoose
  .connect(MONGODB_URL, options)
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Evans',
          email: 'evanstevenson860@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    })
    const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    const io = require('socket.io')(server);
    io.on('connection', socket => {
      console.log('Client connected');
      socket.on('broadcast', data => {
        //console.log(data);
        socket.broadcast.emit("broadcast", data);
      })
    });
  })
  .catch(err => {
    console.log(err);
  });





