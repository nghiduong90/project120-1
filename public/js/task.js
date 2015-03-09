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
	var counter = 0;
	$('.task a').click(function(e) {
		e.preventDefault();
		counter++;
		console.log ("counter = " + counter);
		// get the div ID
		var taskID = $(this).closest('.task').attr('id');
		var taskName = $(this).closest ('.task').attr('id');

		console.log ("------------------- this name on clicked = " + taskName);
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

			var date_obj = new Date(data_json['date']);
			var options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			var display_date = date_obj.toLocaleDateString('en-US', options);

			var details_div = $('#task' + idNumber + ' .details');
			//console.log ("img in task.js " + data_json['img']);
			var new_html = //'<p> print something in html  </p>'; 

					'<div class="panel-footer">' +
					'<span><b>Date:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</b>' + display_date + '</span><br>' +
	                '<span><b>Description:&#160;&#160;</b>' + data_json['description'] + '</span><br>' +
	                //'<span class="pull-left">' + data_json['img'] + '</span>' +
	                //'<img class="img-thumbnail" src="' + data_json['img'] + '" alt="task">' +
	                //'<p class="tex-center">' + data_json['priority'] + '</p>' +
	                //'<div class="clearfix"></div>' +
	               	'<div class="row">' +
	                	'<div class="col-lg-6 pull-left">' +
	                		'<div class="complete checkbox">' +
                    			'<label>' +
                    				'<input type="checkbox">&#160;&#160;&#160;&#160;&#160;Completed This Task' +
                    			'</label>' +
                    		'</div>' +
                    	'</div>' +
                    	'<div class="col-lg-3 pull-right">' +
	                		'<button class="project-delete btn btn-danger" '+
								'type="button" style="float: right">delete</button> <br> <br>' +
						'</div>' + 
	                '</div>'; 


	            /*    '<div class="complete checkbox">' +
                    '<label>' +
                    '<input type="checkbox">&#160;&#160;&#160;&#160;&#160;Completed This Task' +
                    '</label>' +
                    '</div>' +
	                '<button class="project-delete btn btn-danger" '+
						'type="button" style="float: right">delete</button> <br> <br>' + 
	                '</div>';   
 */














			if ((counter % 2) == 1) {
				details_div.html(new_html);

				// define action for delete
				details_div.find('.project-delete').click(function(e){
					$.post('/task/'+idNumber+'/delete', function() {
					window.location.href = '/index';
					});
				});

				// define action for delete task
				details_div.find('.complete').click(function(e){
					$.get('/task/'+idNumber+'/complete', function() {
						window.location.href = '/goToAnalysis';
					});
				});
			}
			else
				details_div.html('');

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
			window.location.href = '/index'; // reload the page
		});
	});
	
}



