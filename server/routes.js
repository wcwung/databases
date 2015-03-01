var controllers = require('./controllers');
var router = require('express').Router();
var models = require('./models')

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;
function findUser(req, res, next){
  models.User.find({username:req.body.username})
    .then(function(user){
      // Find returns array of found users
      // findOne returns a single instance
      req.user = user[0];
      next()
    });
}
