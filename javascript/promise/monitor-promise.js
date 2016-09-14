function promise(func) {

  var self =this;
  this.thenArr = [];
  this.catchArr = [];
  this.func = func;
  this.ret = null;
  this.err = null;

  this.then = function(cb) {
    this.thenArr.push(cb);
    return this;
  };

  this.catch = function(cb) {
    this.catchArr.push(cb);
    return this;
  };

  this.resolve = function() {
    if(this.thenArr.length > 0) {
      try {
        let ret = this.thenArr[0](arguments);
      } catch (e) {
        this.reject(e);
      }
      this.thenArr.shift();
      this.resolve(ret);
    }
  };

  this.reject = function(err) {
    if(this.catchArr.length > 0) {
      let ret = this.catchArr[0](err);
      this.catchArr.shift();
      this.reject(err);
    }
  };

  process.nextTick(function() {
    try {
      self.func(self.resolve.bind(self), self.reject.bind(self));
    } catch (e) {
      self.reject(e);
    }
  });
}

new promise(function(resolve, reject) {
  console.log(1);
  resolve();
})
.then(function() {
  console.log(2);
  throw new Error('a error');
})
.then(function() {
  console.log(3);
})
.catch(console.log);
