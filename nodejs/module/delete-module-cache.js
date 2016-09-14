var obj = require('./a-module.js');
console.log(obj);

obj.name = 'wyx';
console.log(obj);

obj = require('./a-module.js')
console.log(obj);

console.log(require.cache);

delete require.cache[require.resolve('./a-module.js')];

console.log(require.cache);
obj = require('./a-module.js')
console.log(obj);
