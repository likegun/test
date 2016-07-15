'ues strict';
const koa = require('koa');
const Mongodb = require('./lib/mongodb');
const mongodb = new Mongodb({
  host: 'db',
  username: 'admin',
  password: 'mypass',
  database: 'admin'
});

let app = koa();

app.use(function *() {
  yield mongodb.saveThoseFuckingData();
  this.body = yield mongodb.getThoseFuckingData();
});

app.listen(3000);
