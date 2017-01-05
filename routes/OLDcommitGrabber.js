//TESTED USING http://api.github.com/repos/chrislgarry/Apollo-11/contributors

// run --> $ node download_avatar.js Apollo-11 chrislgarry

// .env    token format --> BEARER_TOKEN=...
require('dotenv').config() //check .env file
var request = require('request'), //  request library
    fs = require('fs'), //  file system library
    chalk = require('chalk'), // for coloring results
    clear = require('clear') // this clears the screen

function getDLRepoContribz(username) {
    // clear(); // get ready for a show
    console.log(process.env.test)
    console.log(username || "username")
    var target = `https://api.github.com/users/${username}/events`;
    var requestData = {
        url: target,
        auth: {
            bearer: process.env.BEARER_TOKEN, // token saved in newModule (my-module.js)
        },
        headers: {
            'User-Agent': 'TRON',
        }
    };

    request.get(requestData, (err, response, body) => {

        if (err) {
            throw err
        };

        var data = JSON.parse(body); // parses JSON data for formatting / readability

        if (response.statusCode === 401) {
            throw Error(chalk.red(`ACCESS DENIED!\nYOUR TOKEN IS PROBABLY INCORRECTLY SETUP`));
        }  else if (data.message == 'Not Found') {
          console.log(data)
            throw Error(chalk.red(`Repo or Owner Does Not Exist \:\(\n$ node download_avatar.js <REPO> <USERNAME>`));
        };

        // console.log(data[0], data[1])
        if (data[0].type === 'CreateEvent') {
          console.log ('LAST ACTION WAS A NEW REPO')
          console.log(data[0])
          // not a priority yet
        } else if (data[0].type === 'PushEvent') {
          console.log('LAST ACTION WAS A PUSH')
          var commitMessage = data[0].payload.commits[data[0].payload.commits.length - 1].message
          var commitURL = data[0].payload.commits[data[0].payload.commits.length - 1].url
          // console.log(commitMessage, commitURL)
          var deeperRequestData = {
              url: commitURL,
              auth: { bearer: process.env.BEARER_TOKEN },
              headers: { 'User-Agent': 'TRON' }
          };
          console.log(commitMessage)
          request.get(deeperRequestData, function(err,res,body){
            if(err) { console.log(err) }
              var data = JSON.parse(body)
              console.log(data.files)
            }
          );
        } else {
          console.log(data[0])
        }
    }); // end of main request.get
}; // end of getDLRepoContribz

getDLRepoContribz('EricCasey');


// NEXT STEPS <--
//> Add Mocha & Chai tests
//> Align %downloaded values
//> Add something that counts the file size
//> Add regex input-checker
//>
