var data = require("../data.json");



exports.add = function(req, res) { 
	// Your code goes here

	var p1 = req.query.priority;
	var p2;
	console.log(p1);
	console.log("from add.js");

	switch (p1) {
    case "Do not worry! You have time to finish it!":
        p2 = "panel panel-green";
        break;
    case "This task is important. Do you have time to get it done?":
        p2 = "panel panel-yellow";
        break;
    case "It is very urgent! you need to finish it now!":
        p2 = "panel panel-red";
        break;

	}

	console.log(p2);

	//res.render('added'); 
  	var newTask = 
	{
		'name': req.query.name,
		'date': req.query.date,
		'panel': p2,
		'priority': req.query.priority,
		'description': req.query.description,
	}
	;


	console.log("New task added:");

	console.log(newTask);
	data["tasks"].push(newTask);
	res.render('added', data);

	  	
}