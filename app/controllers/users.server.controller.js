var User = require('mongoose').model('User');
//console.log(User);

exports.create = function(req,res,next) {
  var user = new User(req.body);
  user.save(function(err){
    if (err) {
    //  res.json(user);
      return next(err);
    }
    else {
      res.send(user);
    }
  });
};

exports.list = function(req,res,next){
//  res.send('haha, really');

  User.find(function(err,users){
    if(err){
      console.log(err);
      return next(err);
    }
    else{
      console.log('correct');
      res.set('Content-Type', 'text/plain');
      res.send('haha, really');
    }
  });
};
