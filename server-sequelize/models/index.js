var Sequelize = require('sequelize');
var sql = new Sequelize('chat', 'root');

var user = sql.define('user', {
  username: Sequelize.STRING
});
user.sync();

var message = sql.define('message', {
  text: Sequelize.STRING,
  roomName: Sequelize.STRING,
  username: Sequelize.STRING,
  createdAt: Sequelize.STRING
});
message.sync();

module.exports = {
  messages: {
    get: function(callback){
      message.findAll().success(function(data){
        var obj = {
          results: data
        }
        return callback(obj);
      })
    },
    post: function(body){
      var date = new Date();
      message.build({username: body.username, text: body.text, createdAt: date.toISOString()}).save();
    }
  },
  users: {
    post: function(body){
      user.build({username: body.username}).save();
    }
  }
}
