
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');
var modelHistory = require('./history');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'project120-1';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data
var data_json = require('./data.json');
var history_json = require('./history.json');

// Step 2: Remove all existing documents
models.task
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

modelHistory.taskHistory
  .find()
  .remove()
  .exec(onceClear2);

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = data_json.length;
  var to_save_count_2 = history_json.length;
  for(var i=0; i<data_json.length; i++) {
    console.log ("save data!");
    var json = data_json[i];
    var proj = new models.task(json);

    proj.save(function(err, proj) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        //mongoose.connection.close()
      }
    });
  }
}

function onceClear2(err) {
  if(err) console.log(err);
  var to_save_count_2 = history_json.length;

  if (to_save_count_2 == 0) {
    console.log ("DONE!");
    mongoose.connection.close();
  }

  else
    for(var i=0; i<history_json.length; i++) {
      var json2 = history_json[i];
      var proj2 = new modelHistory.taskHistory(json2);

      proj2.save(function(err, proj2) {
        if(err) console.log(err);

        to_save_count_2--;
        console.log(to_save_count_2 + ' left to save');
        if(to_save_count_2 <= 0) {
          console.log('DONE');
          // The script won't terminate until the 
          // connection to the database is closed
          mongoose.connection.close()
        }
      }); 
    }

}
