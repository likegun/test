var obj = {
  '0': 0,
  '1': 1,
  '2': 2,
  length: 3
};

obj[Symbol.iterator] = function() {
  var index = 0;
  var self = this;
  return {
    next: function() {
      if(index < self.length) {
        return {
          value: self[index++],
          done: false
        };
      }
      else {
        return {
          value: undefined,
          done: true
        };
      }
    },
    return: function () {
      return {
        value: self[index++],
        done: false
      };
    }
  };
};

for(let value of obj) {
  console.log(value);
}
