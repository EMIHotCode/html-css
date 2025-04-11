'use strict';
main();

function main() {
  копайЯмки(3);
  сажай(3);
  засыпьЯмки(3);
  console.log('конец моей работы');
}

function копайЯмки(n) {
  for (let i = 0; i < n; i++)
    делай('ямка');
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
