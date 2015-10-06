var Mongoose = require('mongoose');

var taskHistorySchema = new Mongoose.Schema({
  // fields are defined here
  "name": String,
  "date": Date,
  "priority": String,
  "description": String
});

exports.taskHistory = Mongoose.model('taskHistory', taskHistorySchema);


