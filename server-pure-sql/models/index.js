var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * from messages', function(err,rows,fields){
        var obj = {
          results: rows
        };
        return callback(obj);
      });
    }, // a function which produces all the messages
    post: function (body) {
      var createdAt = new Date();
      var data = '("' + body.text + '","' + body.username + '","' + createdAt.toISOString() + '")'
      db.query('INSERT INTO messages(text, username, createdAt) VALUE' + data);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body) {
      db.query('SELECT * from users', function(err, rows){
        if (!rows.length){
          db.query('INSERT INTO users(username) VALUE ("' + body.username + '")');
        }
      })
    }
  }
};

