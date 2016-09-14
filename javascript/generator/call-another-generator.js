function *a() {
  yield 1;
  yield* b();
  yield* ['a', 'b', 'c'];
  yield ['d', 'e', 'f'];
  yield 2;
}

function *b() {
  yield 3;
  yield 4;
}

for(let e of a()) {
  console.log(e);
}
