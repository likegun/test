var gen = (function *() {
  var num = yield 1;
  console.log(num);
})();

console.log(gen.next());
console.log(gen.next());
