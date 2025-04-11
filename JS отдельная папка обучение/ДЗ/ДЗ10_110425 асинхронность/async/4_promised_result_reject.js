'use strict';
// пусть функции возвращают результат и обрабатывают свои ошибки
console.error = (...x) => console.log('\x1b[31m', ...x, '\x1b[0m');
main();

function main() {
  копайЯмки(3)
    .then(pits => сажай(pits))
    .then(seedling => засыпьЯмки(seedling))
    .then(trees => console.log('успех! посадили ', trees, ' деревьев'))
    .catch(err => console.error('catch:', err.message));
  console.log('конец моей работы');
}

function копайЯмки(n) {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < n; i++)
      result += делай('ямка');
    if (0 === result)
      reject(new Error('не выкопалось :('));
    else
      resolve(result);
  });
}

function сажай(n) {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < n; i++)
      result += делай('саженец');
    if (0 === result)
      reject(new Error('не посадилось :('));
    else
      resolve(result);
  });
}

function засыпьЯмки(n) {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < n; i++)
      result += делай('засыпаю');
    if (0 === result)
      reject(new Error('не засыпалось :('));
    else
      resolve(result);
  });
}

function делай(what) {  // есть некая вероятность что что-то пошло не так
  const 
    chance = Math.random() > 1 - Math.pow(1 - 1 / 2, 1 / 3);
  if (chance)
    console.log(what);
  else
    console.error(what, '...fail');
  return chance;
}

