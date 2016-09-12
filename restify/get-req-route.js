'use strict';
var co = require('co');
var supertest = require("supertest");
var restify = require('restify');

var server = restify.createServer({});

server.get('/user/:id', function (req, res, next) {
   res.json(req.route);
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
