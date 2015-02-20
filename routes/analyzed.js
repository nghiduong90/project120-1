var analysis = require("../analysis.json");
//var graphData = require("../public/js/plugins/morris/morris-data.js");



exports.analyze = function(req, res) { 
	// Your code goes here
	res.render('analyzed');

	var feelingLevel = req.query.feeling;
	var stressedLevel = req.query.stressed;
	var productiveLevel = req.query.productive;
	var sa,s1,s2;
	var pa,p2, p1;
	var fa, f1, f2;

	console.log("stressed level:");
	console.log (req.query.stressed);

	console.log("productive level:");
	console.log (req.query.productive);

	console.log("Feel level:");
	console.log (req.query.feeling);


	if (stressedLevel < 3) {
		analysis["analysis"][0].stressMsg = "You are not stressed!";
		analysis["analysis"][0].stressMsg2 = "That is good. Keep going with this!";
		analysis["analysis"][0].stressedAlert = "alert-success";
	}
	else if (stressedLevel >= 3) {
		analysis["analysis"][0].stressMsg = "You are stressed! ";
		analysis["analysis"][0].stressMsg2 = "Do not worry too much because things will be good when you put on effort";
		analysis["analysis"][0].stressedAlert = "alert-danger";
	}

	if (productiveLevel < 3) {
		analysis["analysis"][0].productiveMsg = "Not very productive!";
		analysis["analysis"][0].productiveMsg2 = "It looks like you have an easy day!";
		analysis["analysis"][0].productiveAlert = "alert-info";
	}
	else if (productiveLevel >= 3) {
		analysis["analysis"][0].productiveMsg = "Good work!";
		analysis["analysis"][0].productiveMsg2 = "You are doing a good job!";
		analysis["analysis"][0].productiveAlert = "alert-success";;
	}

	if (feelingLevel >= 3) {
		analysis["analysis"][0].feelingMsg = "You are having good feeling!";
		analysis["analysis"][0].feelingMsg2 = "";
		analysis["analysis"][0].feelingAlert = "alert-success";
	}
	else if (feelingLevel < 3) {
		analysis["analysis"][0].feelingMsg = "Cheer up now!";
		analysis["analysis"][0].feelingMsg2 = "Your feeling is not very well but it is okay!";
		analysis["analysis"][0].feelingAlert = "alert-danger";
	}


	//analysis["analysis"][0].stressMsg = s1;
	/*analysis[0].stressMsg2 = s2;
	analysis[0].stressedAlert = sa;
	analysis[0].productiveMsg = p1;
	analysis[0].productiveMsg2 = p2;
	analysis[0].productiveAlert = pa;
	analysis[0].feelingMsg = f1;
	analysis[0].feelingMsg2 = f2;
	analysis[0].feelingAlert = fa;
*/
 /* 	var newAnalysis = 
	{
		'stressMsg' : s1,
		'stressMsg2' : s2,
		'stressedAlert' : sa,
		'productiveMsg' : p1,
		'productiveMsg2' : p2,
		'productiveAlert' : pa,
		'feelingMsg' : f1,
		'feelingMsg2' : f2,
		'feelingAlert' : fa,

	}
	;
*/

	console.log("New analysis added:");

//	console.log(newAnalysis);
	//analysis["analysis"].push(newAnalysis);
	//delete analysis.items[0];
	res.render('analyzed', analysis);
	//delete analysis.items[0];
	//console.log(graphData);
/*	var p1 = req.query.priority;
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
*/
	  	
}