/*

var data = require('../data.json');

exports.addTask = function(req, res){
  res.render('task');

};
*/

var models = require('../models');

exports.taskInfo = function(req, res) {
  var taskID = req.params.id;

  // query for the specific project and
  // call the following callback
    models.task
    .find({"_id": taskID})
    .exec(afterQuery);

  function afterQuery(err, task) {
    if(err) console.log(err);
    res.json(task[0]);
  }
}

exports.deleteTask = function(req, res) {
  var taskID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.task
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

    function afterRemoving(err, task) {
      if(err) { console.log(err);}

      res.send('OK');
    }
}

exports.addTask = function(req, res) {
  var form_data = req.body;
  console.log(form_data);


	var p1 = form_data['priority'];
	var p2;
	console.log(p1);
	console.log("from add.js");

	switch (p1) {
    case "Do not worry! You have time to finish it!":
        p2 = "panel panel-primary";
        break;
    case "This task is important. Do you have time to get it done?":
        p2 = "panel panel-green";
        break;
    case "It is very urgent! you need to finish it now!":
        p2 = "panel panel-red";
        break;

	}

  console.log ("p2 " + p2);


  var newTask = new models.task({
   /* "title": form_data["project_title"],
    "date": form_data["date"],
    "summary":form_data["summary"],
    "image": form_data["image_url"],
*/

    "name": form_data['name'],
  	"date": form_data['date'],
  	"panel" : p2,
  	"priority": form_data['priority'],
  	"description": form_data['description']
  });


  console.log ("new task " + newTask);

  newTask.save(afterSaving);

  function afterSaving(err, task) {
    if(err) {console.log(err); }
    res.redirect('/');
    res.send('OK');
    console.log (" in afterSaving done!!!!!");
  }
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();

}