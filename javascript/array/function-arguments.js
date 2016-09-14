function test() {
  console.log(typeof arguments);
  console.log(arguments.constructor);
  console.log(Object.prototype.toString.call(arguments));

  var args1 = Array.prototype.slice.call(arguments);

  console.log(typeof args1);
  console.log(args1.constructor);
  console.log(Object.prototype.toString.call(args1));

  var args2 = Array.from(arguments);

  console.log(typeof args2);
  console.log(args2.constructor);
  console.log(Object.prototype.toString.call(args2));
}

test(1, 2 ,3);
