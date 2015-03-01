var mongoose = require("mongoose");
var _ = require("underscore");
var q = require('q');

mongoose.connect('mongodb://localhost:27017/chat')

var messageSchema = new mongoose.Schema({
  text: String,
  username: String,
  roomName: String,
  createdAt: { type: Date, default: Date.now }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = {
  messages: {
    get: function() {
      var defer = q.defer();
      Message.find(function(err, data){
        if (err){
          return defer.reject(err);
        }
        var obj = {
          results: data
        }
        defer.resolve(obj);
      })
      return defer.promise;
    },
    post: function(req){
      var message = Message({username: req.body.username, text: req.body.text, roomName: req.body.roomname});
      message.save();
    }
  },
  users: {
    post: function(body){
    }
  }
}


// var Sequelize = require('sequelize');
// var sql = new Sequelize('chat', 'root');

// var user = sql.define('user', {
//   username: Sequelize.STRING
// });
// user.sync();

// var message = sql.define('message', {
//   text: Sequelize.STRING,
//   roomName: Sequelize.STRING,
//   username: Sequelize.STRING,
//   createdAt: Sequelize.STRING
// });
// message.sync();

// module.exports = {
//   messages: {
//     get: function(callback){
//       message.findAll().success(function(data){
//         var obj = {
//           results: data
//         }
//         return callback(obj);
//       })
//     },
//     post: function(body){
//       var date = new Date();
//       message.build({username: body.username, text: body.text, createdAt: date.toISOString()}).save();
//     }
//   },
//   users: {
//     post: function(body){
//       user.build({username: body.username}).save();
//     }
//   }
// }
