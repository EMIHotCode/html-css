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


console.log('\n\n\n/******************************* Работа со строками *************************************/');

const loremStr = ['Экзамен для меня всегда праздник, профессор!',
   'Головной убор, между прочим, так не носят.',
   'Счастливые часов не наблюдают!',
   'Чей туфля? О! Мое. Спасибо',
   'Красота спасет мир.',
   'Жили были три китайца',
   'Жили были три китайки'
]

//Задание 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 –  если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
function strLength(s1, s2){
   if(s1.length > s2.length) return 1;
   if(s1.length < s2.length) return -1;
   return 0;
}
console.log('\n\n\nЗадание 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 –  если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.');
console.log(`Строка 1 "${loremStr[2]}"\nСтрока 2 "${loremStr[4]}"\nРезультат: ${strLength(loremStr[2], loremStr[4])}`);
console.log(`Строка 1 "${loremStr[5]}"\nСтрока 2 "${loremStr[6]}"\nРезультат: ${strLength(loremStr[5], loremStr[6])}`);
console.log(`Строка 1 "${loremStr[4]}"\nСтрока 2 "${loremStr[6]}"\nРезультат: ${strLength(loremStr[4], loremStr[6])}`);



// Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
function upperCase(str){
   const trimStr = str.trim();
   let newStr = trimStr[0].toUpperCase() + trimStr.slice(1);
   return newStr;
}
console.log('\n\n\nЗадание 2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки.');
console.log(`Строка "hello world!" Результат: "${upperCase('hello world!')}"`);
console.log(`Строка " привет мир!" Результат: "${upperCase(' привет мир!')}"`);



//Написать функцию, которая считает количество гласных букв в переданной строке.
function IsVowel(letter) {  // дополнительная функция проверяющая является ли буква гласной 
   let vowels = 'aeiouyаеёиоуыэюя';
   if (!vowels.includes(letter.toLowerCase())) return false;
   return true;
}

function sumVowel(str){
   let 
      sum = 0;
   str.split('').forEach((symbol) => {
      if (IsVowel(symbol)){
         sum++;
      }
   });
   return sum;
}
console.log('\n\n\nЗадание 3. Написать функцию, которая считает количество гласных букв в переданной строке.');
console.log(`Строка "В предложении девять гласных." Результат: ${sumVowel('В предложении девять гласных')}`);
console.log(`Строка "this String has six vowels." Результат: ${sumVowel('this String has six vowels.')}`);



//Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка cодержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, xxx . Функция должна быть нечувствительна к регистру.
function checkSpam (str){
   const 
      spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx'],
      strLower = str.toLowerCase();
   let result = spam.some(word => {
      return strLower.includes(word); 
   });
   return result;
};

// function checkSpam (str){
//    const 
//       spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx'],
//    let result = spam.some(word => {
//       return str.toLowerCase().includes(word); 
//    });
//    return result;
// };
console.log(`"Очень нужный файл НЕ УДАЛЯЙТЕ" наличие спама в строке: ${checkSpam('Очень нужный файл НЕ УДАЛЯЙТЕ')}`);


// Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше,  чем  максимальная,  то  необходимо  отбросить лишние символы, добавив вместо них троеточие. Например: truncate("Hello world!!!", 8) должна вернуть "Hello..."
function truncate(str, maxlength) {
   return (str.length > maxlength) ?
     str.slice(0, maxlength - 3) + '...' : str;
};
// возможен вариант через return str.substring(0, maxLength) + '...';

console.log(`Строка ("Hello world!!!", 8) -> ${truncate('Hello world!!!', 8)}`);


//Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function checkPalindrome(str){
   return str === str.split("").reverse().join("");
};
console.log(`палиндром "racecar" -> ${checkPalindrome('racecar')}`);
console.log(`палиндром "javascript" -> ${checkPalindrome('javascript')}`);

//Написать функцию, которая считает количество слов в предложении.
function countWords(str) {
   return str.trim().split(' ').length;
};
console.log(`${loremStr[0]} -> Количество слов: ${countWords(loremStr[0])}`);


//Написать функцию, которая возвращает самое длинное слово из предложения.
function findLongestWord(str) {
   const wordsArray = str.match(/[а-яА-ЯёЁa-zA-Z\-]+/g);
   const arrOfLengths = 
                     wordsArray.map(word => word.length)
                               .indexOf(Math.max(...wordsArray.map(a=>a.length)));
   return wordsArray[arrOfLengths];
};
console.log(`${loremStr[0]} -> Самое длинное слово: ${findLongestWord(loremStr[0])}`);
console.log(`"Мы изучаем JavaScript!!!"-> Самое длинное слово: ${findLongestWord('Мы изучаем JavaScript!!!')}`);


//Написать функцию, которая считает среднюю длину слова в предложении.
function averageLength(str){
   const wordsArray = str.match(/[а-яА-ЯёЁa-zA-Z\-]+/g);
   const arrOfLengths = wordsArray.map(word => word.length);
   let sum = 0;
   arrOfLengths.forEach(function(num) {
      sum += num;
  });
   const lengthArr = arrOfLengths.length;
   const result = Math.ceil(sum/lengthArr);                          
   return result;
};
console.log(`${loremStr[0]} -> Cредняя длина слова: ${averageLength(loremStr[0])} символов.`);
console.log(`"Мы изучаем JavaScript!!!"-> Cредняя длина слова: ${averageLength('Мы изучаем JavaScript!!!')} символов.`);
console.log(`"Три!!! два!!! три... два... раз..."-> Cредняя длина слова: ${averageLength('Три!!! два!!! три... два... раз...')} символов.`);

// Написать функцию, которая принимает строку и символ и выводит индексы, по которым аходится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке. 
function getIndexsOfChar(str, char) {
   let sum =0;
   let indexArray = [];
   let res = str.split('').forEach((letter, i) => {
      if (letter === char){
         sum++;
         indexArray.push[i];
      }
   return `Символ "${char}" встречается ${sum} раз. по индексам [${indexArray}] `;
   });
};
console.log(`"Три!!! два!!! три... два... раз..."-> ${getIndexsOfChar('Три!!! два!!! три... два... раз...', 'a')} `);