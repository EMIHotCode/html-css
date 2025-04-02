"use strict";


//0. Функция возвращает массив из n случайных чисел.
function randomArray(n){
   return Array.from({length: n}, (_, i) => Math.floor(Math.random() * 41));
}

console.log('Задание 0. Функция возвращает массив из n случайных чисел.');
console.log(`4 случайных чисел -> ${randomArray(4)}`);
console.log(`6 случайных чисел -> ${randomArray(6)}`);





//1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
function printArray(text, arr) {
   let str = arr.join(', ');
   return `${text} [${str}]`;
}

 console.log('\n\n\nЗадание 1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)');
 console.log(`${printArray('массив из 6 случайных чисел ', randomArray(6))}`);
 console.log(`${printArray('массив из 8 случайных чисел ', randomArray(8))}`);




//2. Функция принимает массив и возвращает новый, содержащий  только четные элементы из исходного
function onlyEven(arr) {
   return arr.filter(x => x % 2 == 0);
}

console.log('\n\n\nЗадание 2. Функция принимает массив и возвращает новый, содержащий  только четные элементы из исходного.');
let arr1 = randomArray(6);
console.log(`[${arr1}]  ${printArray('только четные элементы', onlyEven(arr1))}`);
arr1 = randomArray(8);
console.log(`[${arr1}]  ${printArray('только четные элементы', onlyEven(arr1))}`);




//3. Функция принимает массив и возвращает сумму всех элементов массива.
function arraySum(arr) {
   let sum = 0;
   arr.forEach(x => {
      sum += x;
  });
   return sum;
}

console.log('\n\n\nЗадание 3. Функция принимает массив и возвращает сумму всех элементов массива.');
arr1 = randomArray(5);
console.log(`[${arr1}] сумма всех элементов: ${arraySum(arr1)}`);
arr1 = randomArray(3);
console.log(`[${arr1}] сумма всех элементов: ${arraySum(arr1)}`);




//4. Функция принимает массив и возвращает его максимальный элемент.
function arrayMax(arr) {
   return Math.max(...arr);
}

console.log('\n\n\nЗадание 4. Функция принимает массив и возвращает его максимальный элемент.');
arr1 = randomArray(5);
console.log(`[${arr1}] максимальный элемент: ${arrayMax(arr1)}`);
arr1 = randomArray(3);
console.log(`[${arr1}] максимальный элемент: ${arrayMax(arr1)}`);


//5. Функция добавления нового элемента в массив по указанному индексу. Функция имеет три параметра: исходный массив, индекс, и новый элемент, и возвращает новый массив с результатом вставки.
function addElementToArray(arr, index, newElement) {
   arr.splice(index, 0, newElement);
   return arr;
 }

 console.log('\n\n\nЗадание 5. Функция добавления нового элемента в массив по указанному индексу. функция имеет три параметра: исходный массив, индекс, и новый элемент, и возвращает новый массив с результатом вставки.');
arr1 = ['00', 11, 22, 33, 44];
console.log(`[${arr1}]  ${printArray('добавление элемента по индексу 2', addElementToArray(['00', 11, 22, 33, 44], 2, 'new!'))}`);
arr1 = randomArray(8);
console.log(`[${arr1}]  ${printArray('добавление элемента по индексу 1', addElementToArray(arr1, 1, 'new!'))}`);

//6. Функция удаления элемента из массива по указанному индексу. Функция меет два параметра: исходный массив, индекс, и возвращает новый массив без элемента с указанным индексом.
function removeElementFromArray(arr, index) {
   arr.splice(index, 1);
   return arr;
 }
 
 printArray('удаление элемента', removeElementFromArray(['00', 11, 22, 33, 44], 2));
console.log('\n\n\nЗадание 6. Функция удаления элемента из массива по указанному индексу. Функция меет два параметра: исходный массив, индекс, и возвращает новый массив без элемента с указанным индексом.');
arr1 = ['00', 11, 'del!', 22, 33, 44];
console.log(`[${arr1}]  ${printArray('удаление по индексу 2 ->', removeElementFromArray(['00', 11, 'del!', 22, 33, 44], 2))}`);
arr1 = randomArray(8);
console.log(`[${arr1}]  ${printArray('удаление по индексу 1 ->', removeElementFromArray(arr1, 1))}`);




const
  one = [55, 1, 2, 44, 3, 1, 55],
  two = [3, 66, 2, 1, 77, 2, 66];

function includes(arr, val) { // проверка на существование элемента в массиве 
   if (arr.includes(val))
     return true;
 return false;
}

function pushUniq(arr, el) { // "рабочая лошадка" для всех функций второй части
   if (!includes(arr, el))
     arr.push(el);
   return arr;
}

//Часть 2. Задание 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function union(array1, array2) { // объединение
   let
     res = [];
   array1.forEach((num) =>{
      res = pushUniq(res, num);
   });
   array2.forEach((num) =>{
      res = pushUniq(res, num);
   });
   return res;
 }

console.log('\n\n\nЧасть2 Задание 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.');
console.log(`[${one}], [${two}] ${printArray('Объединение: ', union(one, two))}`);
arr1 = randomArray(8);
let arr2 = randomArray(6);
console.log(`[${arr1}], [${arr2}] ${printArray('Объединение: ', union(arr1, arr2))}`);


//Часть 2. Задание 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах), без повторений.
function intersection(a, b) { // пересечение
   let res = [];
   a.forEach((num) =>{
      if (includes(b, num)){
         res = pushUniq(res, num);
      }
   });
   return res;
 }

console.log('\n\n\nЧасть2 Задание 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах), без повторений.');
console.log(`[${one}], [${two}] ${printArray('Пересечение: ', intersection(one, two))}`);
arr1 = randomArray(8);
arr2 = randomArray(6);
console.log(`[${arr1}], [${arr2}] ${printArray('Пересечение: ', intersection(arr1, arr2))}`);


//Часть 2. Задание 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве, без повторений.
function complement(a, b) { // дополнение
   let res = [];
   a.forEach((num) =>{
      if (!includes(b, num)){
         res = pushUniq(res, num);
      }
   });
   return res;
}

console.log('\n\n\nЧасть2 Задание 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве, без повторений.');
console.log(`[${one}], [${two}] ${printArray('Дополнение: ', complement(one, two))}`);
arr1 = randomArray(8);
arr2 = randomArray(6);
console.log(`[${arr1}], [${arr2}] ${printArray('Дополнение: ', complement(arr1, arr2))}`);


