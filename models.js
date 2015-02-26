
var Mongoose = require('mongoose');


var taskSchema = new Mongoose.Schema({
  // fields are defined here
  "name": String,
  "date": Date,
  "panel": String,
  "priority": String,
  "description": String
});

exports.task = Mongoose.model('task', taskSchema);


