'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();


});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$('.task a').click(function(e) {
		e.preventDefault();

		// get the div ID
		var taskID = $(this).closest('.task').attr('id');
		console.log (taskID);
		//get rid of task from the front if the id
		var idNumber = taskID.substr('task'.length);

		console.log ("click click ");
		console.log (idNumber);

		//console output
		var url_call = '/taskHistory/' + idNumber;

		console.log ("line 30 " + url_call);

		function addTaskHistoryDetails (history_json) {
			console.log ("in addTaskDetails function");

			var date_obj = new Date(history_json['date']);
			var options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			var display_date = date_obj.toLocaleDateString('en-US', options);

			var details_div = $('#task' + idNumber + ' .details');
			console.log ("img in task.js " + history_json['img']);
			var new_html = //'<p> print something in html  </p>'; 

					'<div class="panel-footer">' +
					'<span class="pull-left"><b>Complete Date</b>:' + display_date + '</span>' +
	                '<span class="pull-left"><b>Description</b>:' + history_json['description'] + '</span>' +
	                //'<span class="pull-left">' + data_json['img'] + '</span>' +
	                //'<img class="img-thumbnail" src="' + data_json['img'] + '" alt="task">' +
	                //'<p class="tex-center">' + data_json['priority'] + '</p>' +
	                //'<div class="clearfix"></div>' +
	                //'<div class="complete checkbox">' +
                    //'<label>' +
                    //'<input type="checkbox">Completed This Task' +
                   // '</label>' +
                   // '</div>' +
	               // '<button class="project-delete btn btn-default" '+
					//	'type="button" style="float: right">delete</button> <br> <br>' + 
	               // '</div>';   
					//'<div class="project-summary">'+project_json['summary']+'</div>'+

			//var details_div = $('#task' + idNumber + '.details');
			//details_div.html('<p> print something in html  </p>');
			details_div.html(new_html);
/*		details_div.find('.project-delete').click(function(e){
				$.post('/task/'+idNumber+'/delete', function() {
					window.location.href = '/';
				});
			} );

		details_div.find('.complete').click(function(e){
				$.post('/task/'+idNumber+'/complete', function() {
					window.location.href = '/blank-page';
				});
			} ); */
		}

		$.get(url_call, addTaskHistoryDetails);
		// issue the GET request
		//$.get(url_call, addProjectDetails);
	});

	$('#submitBtn').click(function(e) {
		console.log('clicked in addTask');
		var name = $('#projectForm #name').val();
		var priority = $('#projectForm #priority').val();
		var date = $('#projectForm #date').val();
		var description = $('#projectForm #description').val();
		var json = {
			'name': name,
			'date': date,
			'priority':  priority,
			'description': description
		};
		$.post('/task/new', json, function() {
			window.location.href = '/'; // reload the page
		});
	});
	
}



