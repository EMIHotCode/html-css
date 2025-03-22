"use strict";

console.log('Задание 1');
console.log('Запросить у пользователя его возраст и определить, кем он является: ребенком(0-12), подростком(12-18), взрослым(18-60) или пенсионером(60-...)');

console.log(`Вводим 2 -> ${humanAge(2)}`);
console.log(`Вводим 12 -> ${humanAge(12)}`);
console.log(`Вводим 19 -> ${humanAge(19)}`);
console.log(`Вводим 60 -> ${humanAge(60)}`);
// console.log(`Вводим -5 -> ${humanAge(-5)}`);
// console.log(`Вводим "a" -> ${humanAge("a")}`);
// console.log(`Вводим $ -> ${humanAge($)}`);
// console.log(`Вводим "$" -> ${humanAge('$')}`);
// console.log(`Вводим '2' -> ${humanAge("2")}`);


console.log('\n\n\nЗадание 2');
console.log('Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1-!, 2-@, 3-# и т.д.).');

console.log(`Ввод 1 -> Спецсимвол ${numberToSymbol(1)}`);
console.log(`Ввод 2 -> Спецсимвол ${numberToSymbol(2)}`);
console.log(`Ввод 5 -> Спецсимвол ${numberToSymbol(5)}`);
console.log(`Ввод 9 -> Спецсимвол ${numberToSymbol(9)}`);
console.log(`Ввод 0 -> Спецсимвол ${numberToSymbol(0)}`);


console.log('\n\n\nЗадание 3');
console.log('Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.');

console.log('\n\n\nЗадание 4');
console.log('Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.');

console.log(`Ввод 2000 -> ${isLeapYear(2000)}`);
console.log(`Ввод 2021 -> ${isLeapYear(2021)}`);
console.log(`Ввод 2022 -> ${isLeapYear(2022)}`);
console.log(`Ввод 2024 -> ${isLeapYear(2024)}`);


console.log('\n\n\nЗадание 5');
console.log('Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.');

console.log(`Ввод 12321 -> ${isNumPalinom(12321)}`);
console.log(`Ввод 12121 -> ${isNumPalinom(12121)}`);
console.log(`Ввод 22334 -> ${isNumPalinom(22334)}`);
console.log(`Ввод 12113 -> ${isNumPalinom(12113)}`);


console.log('\n\n\nЗадание 9');
console.log('Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.');


console.log('\n\n\nЗадание 10');
console.log('Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.');

function nextDate(day, month, year){
   
}



function humanAge(age) {
   if (!parseInt(age) || age < 0)
      return 'введите что то другое';

   return (age >= 0 && age < 12 ) ? 'ребенок':
      (age >= 12 && age < 18) ? 'подросток':
      (age >= 18 && age < 60) ? 'взрослый':'пенсионер';
}

function numberToSymbol(num) {
   const s = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
   switch (num){
      case undefined:
         return 'ошибка ввода';
      default:
         return s[num];
   }
}

function findSimilar(num) {
   
}


function isLeapYear(year) {
   if (year % 400 === 0) {
      return 'високосный';
   }
   if (year % 4 === 0) {
      if (year % 100 !== 0) {
         return 'високосный';
      }
   }
   return 'обычный';
}

function isNumPalinom(num){
   if(num <10000 || num > 99999)
      return 'введено не пятизначное число';
   let sameNumCount = 0;
   for(let i = 0, j =num.length-1; i < parseInt(num.length/2); i++, j--){
      if (num[i] === num[j]){
         sameNumCount++;
      }
   }
   
   if (sameNumCount === 2){
      return 'палиндром';
   }
   else
      return 'обычное число';
}