
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var signinpage = require('./routes/signinpage');
var page = require('./routes/page');
task = require('./routes/task');
var exercises = require('./routes/exercises');
var added = require('./routes/added');
var about = require('./routes/about');
var newuser = require('./routes/newuser');
var forgotpwd = require('./routes/forgotpassword');
var signout = require ('./routes/signout');
var help = require ('./routes/help');
var analysis = require ('./routes/analysis');

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
app.get('/blank-page', page.viewPage);
app.get('/task', task.addTask);
app.get('/exercises', exercises.getExercises);
app.get('/added', added.add);
app.get('/about', about.about);
app.get('/newuser', newuser.newuser);
app.get('/forgotpassword', forgotpwd.forgotpassword);
app.get('/signinpage', signout.signout);
app.get('/help', help.getHelp);
app.get('/analysis', analysis.getAnalysis);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
