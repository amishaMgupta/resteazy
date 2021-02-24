const express = require('express');
const api = require('./api');
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
const mongodb = require('./api/connection/mongod.config');

mongodb.createMongoConnection();
const mdbConn = mongodb.getMongoConnection();
app.use(cors());
app.use(bodyParser.json());
// app.static(""); 

app.use('/api',api);

module.exports = app;