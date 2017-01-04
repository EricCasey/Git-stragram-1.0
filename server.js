require('dotenv').config()

// dependancies
const express = require('express');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const request = require('request');

// routes
const commitGrabber = require('./routes/commitGrabber.js');

const app = express();

app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3001));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post("/api/commitGrabber/:username", function (req, res) {
  console.log(req.params.username)
  res.send('ayyyy')
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
