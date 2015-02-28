var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(obj){
        res.send(obj);
      });
    },
    post: function (req, res) {
      models.messages.post(req.body);
      res.send();
    }
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body);
      res.send();
    }
  }
};

