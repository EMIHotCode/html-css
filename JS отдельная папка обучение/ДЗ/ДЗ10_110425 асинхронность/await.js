'use strict';
let
  a = 0,
  promise = new Promise(resolve =>
    document.addEventListener('click', resolve));

setInterval(() => a++, 1000);

function syncF() {
  console.log('start a=', a);
  console.time('for');
  alert();
  // for (let i = 0; i < 10_000_000_000; i++) {
  // }
  console.timeEnd('for');
  console.log('end a=', a);
}
// syncF();

async function asyncА() {
  console.log('start a=', a);
  await promise;
  console.log('end a=', a);
}
// await f();