'use strict';
function a() {
  let aa = '1';
  function  b() {
    let bb = '2';
    (function () {
      let cc = '3';
    })();
  }
  b();
}

a();

//node-debug see-debug-stack.js
