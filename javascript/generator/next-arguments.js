var gen = (function *() {
  var num = yield 5;
  console.log(num);
})();

console.log(gen.next());
console.log(gen.next(6));
