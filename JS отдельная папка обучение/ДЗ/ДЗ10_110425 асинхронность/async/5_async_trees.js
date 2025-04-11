'use strict';
console.error = (...x) => console.log('\x1b[31m', ...x, '\x1b[0m');
main();

async function main() {
  const
    pits = await копайЯмки(3),
    seedling = await сажай(pits),
    trees = await засыпьЯмки(seedling);
  console.log('конец моей работы, посадили ', trees, ' деревьев');
}

async function копайЯмки(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('ямка');
  return result;
}

async function сажай(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('саженец');
  return result;
}

async function засыпьЯмки(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('засыпаю');
  return result;
}

function делай(what) {
  const chance = Math.random() > 1 - Math.pow(1 - 1 / 2, 1 / 3);
  if (chance)
    console.log(what);
  else
    console.error(what, '...fail');
  return chance;
}

