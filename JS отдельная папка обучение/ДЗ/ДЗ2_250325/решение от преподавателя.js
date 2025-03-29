/* eslint-disable prefer-const */
'use strict';

// Задание 1

// Создать массив из 10 случайных чисел 
function randomArray(n) {
  let
    result = [];
  for (let i = 0; i < n; i++)
    result.push(Math.ceil(100 * Math.random()));
  return result;
}

// 1. Функция принимает массив и выводит его на экран.
function printArray(text, arr) {
  let
    str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i !== arr.length - 1)
      str += ', ';
  }
  console.log(text + ': [', str, ']');
}

let arr1 = randomArray(10);
printArray('массив из 10 случайных чисел', arr1);

// 2. Функция принимает массив и выводит только четные элементы.

function isEven(x) { // вспомогательная функция
  return 0 === x % 2;
}

function onlyEven(arr) {
  let
    res = [];
  for (let val of arr)
    if (isEven(val))
      res.push(val);
  return res;
}

printArray('только четные элементы', onlyEven(arr1));

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
function arraySum(arr) {
  let
    sum = 0;
  for (const val of arr)
    sum += val;
  return sum;
}

console.log('сумма всех элементов:', arraySum(arr1));

// 4. Функция принимает массив и возвращает его максимальный элемент.
function arrayMax(arr) {
  let
    currentMax = -Infinity;
  for (const val of arr)
    if (val > currentMax)
      currentMax = val;
  return currentMax;
}
console.log('максимальный элемент:', arrayMax(arr1));


// 5. Функция добавления нового элемента в массив по указанному индексу.
function addElementToArray(arr, index, newElement) {
  let
    res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index)
      res.push(newElement);
    res.push(arr[i]);
  }
  return res;
}
printArray('добавления нового элемента', addElementToArray(['00', 11, 22, 33, 44], 2, 'new!'));

// 6. Функция удаления элемента из массива по указанному индексу.
function removeElementFromArray(arr, index,) {
  let
    res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index)
      continue;
    res.push(arr[i]);
  }
  return res;
}

printArray('удаление элемента', removeElementFromArray(['00', 11, 22, 33, 44], 2));


// Задание 2

const
  one = [55, 1, 2, 44, 3, 1, 55],
  two = [3, 66, 2, 1, 77, 2, 66];

function includes(arr, val) { // проверка на существование элемента в массиве 
  for (let item of arr)
    if (item === val)
      return true;
  return false;
}

function pushUniq(arr, el) { // "рабочая лошадка" для всех функций второй части
  if (!includes(arr, el))
    arr.push(el);
  return arr;
}

// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function union(a, b) { // объединение
  let
    res = [];
  for (let item of a)
    res = pushUniq(res, item);
  for (let item of b)
    res = pushUniq(res, item);
  return res;
}

// 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы без повторений.
function intersection(a, b) { // пересечение
  let res = [];
  for (let item of a)
    if (includes(b, item))  // if (includes(b, item) && !includes(res,item)) res.push(item);
      res = pushUniq(res, item);
  return res;
}

// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве. 
function complement(a, b) { // дополнение
  let res = [];
  for (let item of a)
    if (!includes(b, item))
      res = pushUniq(res, item);
  return res;
}

printArray('1 массив ', one);
printArray('2 массив ', two);
printArray('Объединение', union(one, two));
printArray('Пересечение', intersection(one, two));
printArray('Дополнение', complement(one, two));