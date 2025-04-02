'use strict';

// Задание 1

// Создать массив из 10 случайных чисел 
const
  arr1 = Array.from({ length: 10 }, () => Math.ceil(100 * Math.random()));

// 1. Функция принимает массив и выводит его на экран.
function printArray(text, arr) {
  console.log(text, '[', arr.join(', '), ']');
}
printArray('Массив из 10 случайных чисел:', arr1);

// 2.  только четные элементы.
function isEven(x) { // вспомогательная функция
  return 0 === x % 2;
}

printArray('Только четные элементы:', arr1.filter(isEven)); //  x => !(x % 2)

// 3.  сумма всех элементов массива.
console.log('Сумма всех элементов:', arr1.reduce((a, b) => a + b, 0));// начальное значение лучше всегда задавать  

// 4.  максимальный элемент.
console.log('Максимальный элемент:', arr1.reduce((prev, current) => prev > current ? prev : current, -Infinity));

const
  sequence = ['00', 11, 22, 33, 44];
// 5.  добавление нового элемента в массив по указанному индексу.
// просто используем метод splice


sequence.splice(2, 0, 'new!');
printArray('добавления нового элемента', sequence);

// 6.удаление элемента из массива по указанному индексу.
// просто используем метод splice

sequence.splice(2, 1);
printArray('удаление элемента', sequence);

// Задание 2
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
const
  one = [55, 1, 2, 44, 3, 1, 55],
  two = [3, 66, 2, 1, 77, 2, 66];


function uniq(arr) { // оставить в массиве только уникальные элементы
  return arr.filter((elem, index) => arr.indexOf(elem) === index); // оставляем только первое вхождение
}

// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов
// без повторений.
function union(a, b) {
  return uniq(a.concat(b)); // можно использовать [...a,...b]
}

// 2. Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
function intersection(a, b) {
  return uniq(a.filter(elem => b.includes(elem)));
}

// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве. 
function complement(a, b) {
  return uniq(a.filter(elem => !b.includes(elem)));
}

printArray('Первый:', one);
printArray('Второй:', two);
printArray('Объединение:', union(one, two));
printArray('Пересечение:', intersection(one, two));
printArray('Дополнение:', complement(one, two));