var fs = require('fs');
var path = require('path');

var ajv = require('ajv')();
var express = require('express');
var proxy = require('express-http-proxy');
var app = express();


var config = require('./config.json');
var public = path.resolve(__dirname + '/public/');

// Return index.html for all routes
for (var url in config.routes) {
  app.get(url, function (req, res) {
    res.sendFile(public + '/index.html');
  });
};

app.listen(config.port, function() {
  console.log('Http server started on ', config.port);
});

// Static folders
app.use(express.static(public));

/*
  Put your code here -----------------------------------
*/

var prURL = 'http://localhost:8000';
app.use('/api', proxy(prURL, {
  forwardPath: function(req, res) {
    console.log('proxy to ' + prURL);
    return require('url').parse(req.url).path;
  }
}));
