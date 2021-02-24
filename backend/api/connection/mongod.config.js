let mongoose = require('mongoose');
// create mongo connection
function createMongoConnection() {
  mongoose.connect('mongodb://localhost/resteasy1');
}
// get mongo connection object
function getMongoConnection() {
  return mongoose.connection;
}
// Event listener for mongo "error" event.
function onError(err) {
 console.log('Error in database connection...', err);
}
//Event listener for mongo "open" event
function onSuccess() {
 console.log('Connected to mongo database');
}
module.exports = {
  createMongoConnection,
  getMongoConnection,
  onError,
  onSuccess
} 