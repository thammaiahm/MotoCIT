
/*!
 * nodejs-express-mongoose-demo
 * Copyright(c) 2013 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */
/**
 * Module dependencies
 */

var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var conf = require('./config/config');
//var passport = require('./config/passport');

var app = express();
var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(conf.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

// Bootstrap passport config
require('./config/passport')(passport, conf);


// Bootstrap application settings
require('./config/express')(app, passport);

// Bootstrap routes
require('./config/router')(app);
require('./config/routes')(app, passport);
/*
 * Added by Thammaiah for RSD Migration
 */


app.listen(port);
console.log('Express app started on port ' + port);

/**
 * Expose
 */

module.exports = app;
