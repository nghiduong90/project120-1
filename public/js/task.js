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
		var url_call = '/task/' + idNumber;

		console.log ("line 30 " + url_call);

		function addTaskDetails (data_json) {
			console.log ("in addTaskDetails function");

			var details_div = $('#task' + idNumber + ' .details');
			
			var new_html = //'<p> print something in html  </p>'; 

					'<div class="panel-footer">' +
	                '<span class="pull-left"><b>Description</b>:' + data_json['description'] + '</span>' +
	                '<div class="clearfix"></div>' +
	                '<button class="project-delete btn btn-default" '+
						'type="button">delete</button>'
	                '</div>';   
					//'<div class="project-summary">'+project_json['summary']+'</div>'+

			//var details_div = $('#task' + idNumber + '.details');
			//details_div.html('<p> print something in html  </p>');
			details_div.html(new_html);
		details_div.find('.project-delete').click(function(e){
				$.post('/task/'+idNumber+'/delete', function() {
					window.location.href = '/';
				});
			} );
		}

		$.get(url_call, addTaskDetails);
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



