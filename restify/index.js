'use strict';
var co = require('co');
var supertest = require("supertest");
var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.get('/', co.wrap(function *(req, res, next) {
  res.json({
    name: 'wrq'
  });
}));

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
