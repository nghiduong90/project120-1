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

//var modelHistory = require('../history');

/*
 * GET home page.
 */
/*
exports.view = function(req, res){

	console.log ("render task History");
	modelHistory.taskHistory
		.find()
		.sort('-date')
		.exec(renderTaskHistory);

	function renderTaskHistory(err, taskHistory) {
		console.log ("in history.js in render task");
		res.render('history', { 'taskHistory': taskHistory });
		console.log (taskHistory);
	}

};*/