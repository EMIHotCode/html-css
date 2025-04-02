console.log('\n/******************************* Работа со строками *************************************/');

const loremStr = ['Экзамен для меня всегда праздник, профессор!',
   'Арфы нет – возьмите бубен!',
   'Счастливые часов не наблюдают!',
   'Чей туфля? О-о-о! Мое. Спасибо',
   'Красота спасет мир.',
   'Жили были три китайца',
   'Жили были три китайки'
]

//Задание 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 –  если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
const compareFn = (a, b) => a.length - b.length;

function strLength(s1, s2){
   nums.sort(compareFn)
   if(s1.length > s2.length) return 1;
   if(s1.length < s2.length) return -1;
   return 0;
}
console.log('\n\nЗадание 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 –  если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.');
console.log(`Строка 1 "${loremStr[2]}"\nСтрока 2 "${loremStr[4]}"\nРезультат: ${strLength(loremStr[2], loremStr[4])}`);
console.log(`Строка 1 "${loremStr[5]}"\nСтрока 2 "${loremStr[6]}"\nРезультат: ${strLength(loremStr[5], loremStr[6])}`);
console.log(`Строка 1 "${loremStr[4]}"\nСтрока 2 "${loremStr[6]}"\nРезультат: ${strLength(loremStr[4], loremStr[6])}`);



//Задание 2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
function upperCase(str){
   const trimStr = str.trim();
   let newStr = trimStr[0].toUpperCase() + trimStr.slice(1);
   return newStr;
}
console.log('\n\n\nЗадание 2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки.');
console.log(`Строка "hello world!" Результат: "${upperCase('hello world!')}"`);
console.log(`Строка " привет мир!" Результат: "${upperCase(' привет мир!')}"`);



//Задание 3. Написать функцию, которая считает количество гласных букв в переданной строке.
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
console.log(`Строка "В предложении девять гласных."\nКоличество гласных: ${sumVowel('В предложении девять гласных')}\n\n`);
console.log(`Строка "this String has six vowels."\nКоличество гласных: ${sumVowel('this String has six vowels.')}\n\n`);



//Задание 4. Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка cодержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, xxx . Функция должна быть нечувствительна к регистру.
function checkSpam (str){
   let
      spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx'];
      return spam.some(word => {
         return str.toLowerCase().includes(word); 
      });
};


console.log('\n\n\nЗадание 4. Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка cодержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, xxx . Функция должна быть нечувствительна к регистру.');
console.log(`Строка "Очень нужный файл НЕ УДАЛЯЙТЕ" Результат: "${checkSpam('Очень нужный файл НЕ УДАЛЯЙТЕ')}"`);
console.log(`Строка "${loremStr[0]}" Результат: "${checkSpam(loremStr[0])}"`);



//Задание 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше,  чем  максимальная,  то  необходимо  отбросить лишние символы, добавив вместо них троеточие. Например: truncate("Hello world!!!", 8) должна вернуть "Hello..."
function truncate(str, maxlength) {
   return (str.length > maxlength) ?
     str.slice(0, maxlength - 3) + '...' : str;
};
// возможен вариант через return str.substring(0, maxLength) + '...';
console.log('\n\n\nЗадание 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше,  чем  максимальная,  то  необходимо  отбросить лишние символы, добавив вместо них троеточие. Например: truncate("Hello world!!!", 8) должна вернуть "Hello..."');
console.log(`Строка ("Hello world!!!", 8) Результат: "${truncate('Hello world!!!', 8)}"`);
console.log(`Строка ("${loremStr[5]}, 12", Результат: "${truncate(loremStr[5], 12)}"`);



//Задание 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function checkPalindrome(str){
   return str === str.split("").reverse().join("");
};

console.log('\n\n\nЗадание 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.');
console.log(`Проверка на палиндром "racecar" -> "${checkPalindrome('racecar')}"`);
console.log(`Проверка на палиндром "javascript" -> "${checkPalindrome('javascript')}"`);




//Задание 7.Написать функцию, которая считает количество слов в предложении.
function countWords(str) {
   const wordsArray = str.match(/[а-яА-ЯёЁa-zA-Z\-]+/g);
   return wordsArray.length;
};
console.log('\n\n\nЗадание 7.Написать функцию, которая считает количество слов в предложении.');
console.log(`Строка "${loremStr[1]}"\nКоличество слов: ${countWords(loremStr[1])}\n\n`);
console.log(`Строка "${loremStr[3]}"\nКоличество слов: ${countWords(loremStr[3])}\n\n`);




//Задание 8. Написать функцию, которая возвращает самое длинное слово из предложения.
function findLongestWord(str) {
   const wordsArray = str.match(/[а-яА-ЯёЁa-zA-Z\-]+/g);
   const arrOfLengths = 
                     wordsArray.map(word => word.length)
                               .indexOf(Math.max(...wordsArray.map(a=>a.length)));
   return wordsArray[arrOfLengths];
};
console.log('\n\n\nЗадание 8. Написать функцию, которая возвращает самое длинное слово из предложения.');
console.log(`"${loremStr[0]}" -> Самое длинное слово: ${findLongestWord(loremStr[0])}`);
console.log(`"Мы изучаем JavaScript!!!"-> Самое длинное слово: ${findLongestWord('Мы изучаем JavaScript!!!')}`);



//Задание 9. Написать функцию, которая считает среднюю длину слова в предложении.
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
console.log('\n\n\nЗадание 9. Написать функцию, которая считает среднюю длину слова в предложении.');
console.log(`"${loremStr[6]}" -> Cредняя длина слова: ${averageLength(loremStr[6])} символов.`);
console.log(`"Мы изучаем JavaScript!!!"-> Cредняя длина слова: ${averageLength('Мы изучаем JavaScript!!!')} символов.`);
console.log(`"Три!!! два!!! три... два... раз..."-> Cредняя длина слова: ${averageLength('Три!!! два!!! три... два... раз...')} символов.`);





//Задание 10. Написать функцию, которая принимает строку и символ и выводит индексы, по которым аходится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке. 
function getIndexsOfChar(str, char) {
   let sum =0;
   let indexArray = [];
   str.split('').forEach((letter, i) => {
      if (letter === char){
         sum++;
         indexArray.push(i);
      }
   });
   return `Символ "${char}" встречается ${sum} раз. по индексам [${indexArray}] `;
};
console.log('\n\n\nЗадание 10. Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке');

console.log(`Строка "Раз!!! два!!! три..." Проверка наличия символа: "а"\n${getIndexsOfChar('Три!!! два!!! три... два... раз...', 'а')} `);
console.log(`\nСтрока "${loremStr[4]}" Проверка наличия символа: "с"\n${getIndexsOfChar(loremStr[4], 'с')} `);