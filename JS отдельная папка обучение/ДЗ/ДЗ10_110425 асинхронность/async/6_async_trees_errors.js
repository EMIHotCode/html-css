'use strict';
console.error = (...x) => console.log('\x1b[31m', ...x, '\x1b[0m');
main();

async function main() {
  try {
    const 
      pits = await копайЯмки(3),
      seedling = await сажай(pits),
      trees = await засыпьЯмки(seedling);
    console.log('конец моей работы, посадили ', trees, ' деревьев');
  } catch (err) {
    console.error('catch:', err.message);
  } finally {
    console.log('всё!');
  }
}

async function копайЯмки(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('ямка');
  if (0 === result) throw new Error('не выкопалось :(');
  return result;
}

async function сажай(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('саженец');
  if (0 === result) throw new Error('не посадилось :(');
  return result;
}

async function засыпьЯмки(n) {
  let result = 0;
  for (let i = 0; i < n; i++)
    result += делай('засыпаю');
  if (0 === result) throw new Error('не засыпалось :(');
  return result;
}

function делай(what) {
  const chance = Math.random() > 1 - Math.pow(1 - 2 / 3, 1 / 3);
  if (chance)
    console.log(what);
  else
    console.error(what, '...fail');
  return chance;
}

