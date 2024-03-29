const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const products = require('./routes/api/products');
const comments = require('./routes/api/comments')
const cartitems = require('./routes/api/carts')
const path = require('path');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.get("/", (req, res) => {res.send("Hello");});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/products", products);
app.use('/api/carts', cartitems);
app.use('/api/comments', comments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
