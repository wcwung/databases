CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  objectId INT(3) AUTO_INCREMENT,
  createdAt VARCHAR(140),
  username VARCHAR(140),
  text VARCHAR(140),
  room VARCHAR(140),
  PRIMARY KEY  (objectId)
);

-- CREATE TABLE rooms (
--   roomName VARCHAR(140),
--   PRIMARY KEY  (roomName)
-- );

CREATE TABLE users (
  username VARCHAR(140),
  PRIMARY KEY  (username)
);



ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users(username);
-- ALTER TABLE messages ADD FOREIGN KEY (room) REFERENCES rooms(roomName);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

