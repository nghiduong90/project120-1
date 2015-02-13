var data = require("../data.json");



exports.add = function(req, res) { 
	// Your code goes here


	//res.render('added'); 
  	var newTask = 
	{
		'name': req.query.name,
		'date': req.query.date,
		'priority': req.query.priority,
		'description': req.query.description,
	}
	;


	console.log("New task added:");

	console.log(newTask);
	data["tasks"].push(newTask);
	res.render('added', data);

	  	
}