'use strict';
// 1. Написать функцию, которая принимает 2 строки и сравнивает их длину.
function cmpLength(a, b) {
  return (
    a.length === b.length
      ? 0
      : a.length > b.length
        ? 1
        : -1
  );
}

console.log('➀%c\n%s', 'color:green',
  Array.from({ length: 10 },
    () => '▰'.repeat(1 + 30 * Math.random()))
    .sort(cmpLength)
    .join('\n'));

// 2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки
function capitalizeOneWord(word) {
  return word.length
    ? word[0].toUpperCase() + word.slice(1)
    : '';
}

function capitalizeAllWords(text) {
  return splitByWords(text).map(capitalizeOneWord).join(' ');
}
console.log('➁ Заглавные:', capitalizeAllWords('каждый оформитель желает знать, где скачать фотошоп'));

// 3. Написать функцию, которая считает количество гласных  букв в переданной строке.
function isVowel(letter) {
  return 'яаюуыиеэоёiuaeoy'.includes(letter.toLowerCase());
}

function vowelNumber(str) {
  let
    vowels = 0;
  for (const letter of str)
    if (isVowel(letter))
      vowels++;
  return vowels;
}
console.log('➂ Количество гласных:', vowelNumber('после If и после When, как грамматика нас учит, ставим Present вместо Future'));

// 4. Написать функцию для проверки спама в переданной строке
function isASpam(text) {
  text = text.toLowerCase();
  const
    spams = ['100%', 'бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх'];
  return spams.some(spam => text.includes(spam));
  // for (const spam of spams)
  //   if (text.toLowerCase().includes(spam))
  //     return true;
  // return false;
}
console.log('➃ Проверка спама:', isASpam('* ТоЛьКо СеГоДнЯ * '), isASpam(' Hello !!! '));

// 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину.
function cutString(str, maxLength, ellipsis = '…') {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength - ellipsis.length) + ellipsis;
  }
  return str;
}
console.log('➄ Сокращение строки:', cutString('Сокращение', 5));

// 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function isAPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++)
    if (str.at(i) !== str.at(-(i + 1)))
      return false; // str[i] != str[str.length-1-i]
  return true;
}
const
  palindrome = 'Нажал кабан на баклажан'
    .toLowerCase()
    .replaceAll(' ', '');
console.log('➅ Палиндром:', palindrome, isAPalindrome(palindrome));

// Вспомогательная функция разбивающая строку на слова, в дальнейшем ее можно усовершенствовать 
function splitByWords(string) {
  return string.split(' ');
}

// 7. Написать функцию, которая считает количество слов в предложении.
function numberOfWords(text) {
  return splitByWords(text).length;
}
console.log('➆ Количество слов:', numberOfWords('Философия Linux — «смейся в лицо опасностям». Упс. Не то. «Делай это сам». Да, именно так.'));

// 8. Написать функцию, которая возвращает самое длинное слово из предложения.
function getLongestWord(text) {
  let
    longestWord = '';
  for (const word of splitByWords(text))
    if (word.length > longestWord.length)
      longestWord = word;
  return longestWord;
}
console.log('➇ Самое длинное слово:', getLongestWord('Хорошо задокументированный баг, автоматически становится фичей!'));

// 9. Написать функцию, которая считает среднюю длину слова в предложении.
function meanWordLength(text) {
  let
    sum = 0;
  for (const word of splitByWords(text))
    sum += word.length;
  return sum / numberOfWords(text);
}
const
  pi = 'Это я знаю и помню прекрасно - "Пи" многие знаки мне лишни, напрасны';
// console.log(pi.replaceAll(/[^\p{Alpha}|^\s]/gu, '') // убираем не буквы и не пробелы
//   .split(/\s+/).map(s => s.length).join(''), Math.PI.toPrecision(12));
console.log('➈ Средняя длина слова:', meanWordLength(pi));

// 10. Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке
function allEntries(str, letter) {
  const
    res = [];
  for (let i = 0; i < str.length; i++)
    if (str[i] === letter)
      res.push(i);
  return res;
}
const
  quoteLinus =
    `Плохие программисты думают о коде.
    Хорошие программисты думают о структурах данных и их взаимосвязях.
    Линус Торвальдс, создатель Linux`,
  positions = allEntries(quoteLinus, 'о');
console.log('➉ буквы "о", в позициях: %s \nколичество: %i', positions, positions.length);