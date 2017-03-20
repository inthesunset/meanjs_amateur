var config = require('./config'),
    mongoose = require('mongoose');
//console.log(config.db);
module.exports = function(){
//  console.log('where???')
  var db = mongoose.connect(config.db);
//console.log(db);
//   mongoose.connection;
//console.log('where???');
//  db.on('error', function(error){console.log('connection error:')});
//  db.once('open', function() {
//    console.log('we are connected')
//  });

  mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});
require('../app/models/user.server.model.js');
  return db;
};
