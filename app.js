
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var signinpage = require('./routes/signinpage');
var page = require('./routes/page');
var addTask = require('./routes/addTask');
var exercises = require('./routes/exercises');
//var added = require('./routes/added');
var about = require('./routes/about');
var newuser = require('./routes/newuser');
var forgotpwd = require('./routes/forgotpassword');
var signout = require ('./routes/signout');
var help = require ('./routes/help');
var analysis = require ('./routes/analysis');
var analyzed = require ('./routes/analyzed');

var task = require('./routes/task');
//var analyzed = require ('./public/js/plugins/morris/morris-data.js');


// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'project120-1';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/add', add.addFriend);
// Add routes here
//app.get('/', signinpage.signin);
app.get('/', index.view)

app.get('/task/:id', task.taskInfo);
app.post('/task/:id/delete', task.deleteTask);
app.post('/task/new', task.addTask);

app.get('/blank-page', page.viewPage);
app.get('/task', addTask.addTask);
app.get('/exercises', exercises.getExercises);
//app.get('/added', added.add);
app.get('/about', about.about);
app.get('/newuser', newuser.newuser);
app.get('/forgotpassword', forgotpwd.forgotpassword);
app.get('/signinpage', signout.signout);
app.get('/help', help.getHelp);
app.get('/analysis', analysis.getAnalysis);
app.get('/analyzed', analyzed.analyze);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
