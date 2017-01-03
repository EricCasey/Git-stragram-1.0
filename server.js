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

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}








app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
