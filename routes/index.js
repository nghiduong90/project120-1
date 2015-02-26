// Get all of our friend data
/*
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index');
};

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};
*/

var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	console.log ("render task");
	models.task
		.find()
		.sort('-date')
		.exec(renderTask);

	function renderTask(err, task) {
		console.log ("in index.js in render task");
		res.render('index', { 'tasks': task });
		console.log (task);
	}

};