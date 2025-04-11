'use strict';
main();
function main() {
  копайЯмки(3)
    .then(() => сажай(3))
    .then(() => засыпьЯмки(3))
    .then(() => console.log('всё!'));
  console.log('конец моей работы');
}

function копайЯмки(n) {  // промисифицировал только первую функцию для наглядности
  return new Promise(resolve => {
    for (let i = 0; i < n; i++)
      делай('ямка');
    resolve();
  });
}

function сажай(n) {
  for (let i = 0; i < n; i++)
    делай('саженец');
}

function засыпьЯмки(n) {
  for (let i = 0; i < n; i++)
    делай('засыпаю');
}

function делай(what) {
  console.log(what);
}

