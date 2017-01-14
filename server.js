require('dotenv').config()

// dependancies
const express = require('express');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const request = require('request');
const http = require('https');
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
  var username = req.params.username;
  var options = {
    host: 'api.github.com',
    path: `/users/${username}/events`,
    headers: {
      'User-Agent': 'TRON'
    }
  };

  var callback = function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      console.log("Github API Call Complete for: " + username)
      res.send(str)
    });
  }

  http.request(options, callback).end();
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
