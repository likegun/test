var express = require('express');

var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
  key: fs.readFileSync('https/key.pem'),
  cert: fs.readFileSync('https/cert.pem'),
  passphrase: 'aaaa'
};

var app = express();

var oneDay = 86400000;
app.use(express.static(__dirname + '/public', { maxAge: oneDay}));

http.createServer(app).listen(3000);
https.createServer(options, app).listen(3001);
