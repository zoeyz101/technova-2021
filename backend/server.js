const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const accomplishmentRoutes = require('./routes/accomplishments');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', accomplishmentRoutes);


console.log(process.env.PORT);

const server = app.listen(process.env.PORT||5000, function(){
 console.log('Listening on port 5000');
});