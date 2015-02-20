var analysis = require('../analysis.json');

exports.getAnalysis = function(req, res){
  res.render('analysis', analysis);

};
