var fs = require('fs');

function * readFileAndAddSomething() {
  console.log('start');
  let content = yield readFile('javascript/generator/something.txt');
  console.log(content);
  console.log('end');
}

function readFile(filePath) {
  fs.readFile(filePath, function(err, something) {
    if(err)
      gen.throw(err);
    else
      gen.next(something.toString());
  });
}

var gen = readFileAndAddSomething();

gen.next();
