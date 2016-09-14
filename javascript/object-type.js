var arr = [1,2,3];
var obj = {
  name: 'wrq',
  age: 22
};

console.log(arr.constructor);
console.log(obj.constructor);

console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(obj));

console.log(arr instanceof Array);
console.log(obj instanceof Array);

console.log(Array.prototype.isPrototypeOf(arr));
console.log(Array.prototype.isPrototypeOf(obj));

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
