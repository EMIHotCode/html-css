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

console.log(`Ввод 112 -> ${findSimilar(112)}`);
console.log(`Ввод 123 -> ${findSimilar(123)}`);
console.log(`Ввод 545 -> ${findSimilar(545)}`);
console.log(`Ввод 790 -> ${findSimilar(790)}`);


console.log('\n\n\nЗадание 4');
console.log('Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.');

console.log(`Ввод 2000 -> ${isLeapYear(2000)}`);
console.log(`Ввод 2021 -> ${isLeapYear(2021)}`);
console.log(`Ввод 2022 -> ${isLeapYear(2022)}`);
console.log(`Ввод 2024 -> ${isLeapYear(2024)}`);


console.log('\n\n\nЗадание 5');
console.log('Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.');

console.log(`Ввод 12321 -> ${isNumPalinom(12321)}`);
console.log(`Ввод 59595 -> ${isNumPalinom(59595)}`);
console.log(`Ввод 22334 -> ${isNumPalinom(22334)}`);
console.log(`Ввод 12113 -> ${isNumPalinom(12113)}`);


console.log('\n\n\nЗадание 9');
console.log('Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.');

console.log('Тестирование пользователя 1');
console.log(`\t Итог: ${testUser()} баллов.`);
console.log('Тестирование пользователя 2');
console.log(`\t Итог: ${testUser()} баллов.`);
console.log('Тестирование пользователя 3');
console.log(`\t Итог: ${testUser()} баллов.`);


console.log('\n\n\nЗадание 10');
console.log('Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.');
console.log(`Ввод даты (10 12 2000)       -> Дата следущая за ней ${nextDate(10, 12, 2000)}`);
console.log(`Ввод даты (10 12 2000 5)     -> Через 5 дней         ${nextDate(10, 12, 2000, 5)}`);
console.log(`Ввод даты (10 12 2000 0 2)   -> Через 2 месяца       ${nextDate(10, 12, 2000, 0, 2)}`);
console.log(`Ввод даты (10 12 2000 0 0 1) -> Через 1 год          ${nextDate(10, 12, 2000, 0, 0, 1)}`);
console.log(`Ввод даты (28 02 2024)       -> Дата следущая за ней ${nextDate(28, 2, 2024)}`);
console.log(`Ввод даты (28 02 2024 3)     -> Через 3 дня          ${nextDate(28, 2, 2024, 3)}`);
console.log(`Ввод даты (28 02 2024 0 2)   -> Через 2 месяца       ${nextDate(28, 2, 2024, 0, 2)}`);
console.log(`Ввод даты (28 02 2024 1 1 2) -> Через 2 года 1 месяц и 1 день ${nextDate(28, 2, 2024, 1, 1, 2)}`);


function nextDate(day, month, year, _nextDay = 0, _nextMonth = 0, _nextYear = 0){

   let leapYear = false;
   if (year % 400 === 0) {
      leapYear = true;
   }
   if (year % 4 === 0) {
      if (year % 100 !== 0) {
         leapYear = true;
      }
   }
   // определяем количество дней в феврале
   const daysFebruary = leapYear ? 29 : 28;

// создаем переменные для выводимой даты
let nextDay = day, nextMonth = month, nextYear = year;

   if (_nextDay === 0 && _nextMonth === 0 && _nextYear === 0 ){
      nextDay = day + 1;
      nextMonth = month;
      nextYear = year;
   }
   else{
      nextDay += _nextDay;
      nextMonth += _nextMonth;
      nextYear += _nextYear;
   }

   if (nextDay > 31 || (nextDay > 30 && [4, 6, 9, 11].includes(nextMonth)) || (nextDay > daysFebruary && month === 2)) {
      if (month === 2){
         nextDay = nextDay - daysFebruary;
      }
      else if ([4, 6, 9, 11].includes(nextMonth)){
         nextDay -= 30;
      }
      else if ([1, 3, 5, 7, 8, 10, 12].includes(nextMonth)){
         nextDay -= 31;
      }
      
      nextMonth++;
   }

    // если следующий месяц больше 12
   if (nextMonth > 12) {
   nextMonth = nextMonth - 12;
   nextYear++;
   }
   
   return `${nextDay}.${nextMonth}.${nextYear}`;
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
   if(num<100 || num>999){
   return 'Введено не трезначное число.';
   }

   for (let i = 0; i <String(num).length-1; i++){
      for (let j = i+1; j < String(num).length; j++){
         if(Number(String(num)[i]) === Number(String(num)[j])){
            return `есть одинаковые цифры ${Number(String(num)[i])}`;
         }
      }
   }
   return 'одинаковых цифр нет.';
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
   
   let numStr = num.toString();
   let reversNum = '';
   // Number(String(num))
   for(let i = Number(String(num).length-1); i >= 0; i--) {
      reversNum += numStr[i];
   }
   
   if (parseInt(reversNum) === num){
      return 'палиндром';
   }
   else
      return 'обычное число';
}

function testUser(){

   let result = 0;
   const rigthAnswer = 2;
   let answerResult = 0;

   switch (1){
      case 1:
         console.log('\t Вопрос 1. Сколько будет 2+2. Варианты 1) 3. 2) 4. 3) 6.');
         let answ = parseInt(1+Math.random()*3);

         if (answ === 2){
            result += rigthAnswer;
            answerResult = rigthAnswer;
         }
         console.log(`\t\t random() ответ -> ${answ}. Начислено -> ${answerResult}`);

      case 2:
         console.log('\t Вопрос 2. Куда показывает стрелка N компаса. Варианты 1) Юг 2) Восток 3) Север');
         answ = parseInt(1+Math.random()*3);

         answerResult = 0;
         if (answ === 3){
            result += rigthAnswer;
            answerResult = rigthAnswer;
         }
         console.log(`\t\t random() ответ -> ${answ}. Начислено -> ${answerResult}`);

      case 3:
         console.log('\t Вопрос 3. Язык программирования который мы сейчас изучаем. Варианты 1) JS 2) C# 3) Python');
         answ = parseInt(1+Math.random()*3);

         answerResult = 0;
         if (answ === 1){
            result += rigthAnswer;
            answerResult = rigthAnswer;
         }
         console.log(`\t\t random() ответ -> ${answ}. Начислено -> ${answerResult}`);
   }
   return result;
}