"use strict";

console.log('Задание 1');
console.log('Запросить у пользователя его возраст и определить, кем он является: ребенком(0-12), подростком(12-18), взрослым(18-60) или пенсионером(60-...)');


console.log(`Вводим 2 -> ${humanAge(2)}`);
console.log(`Вводим 12 -> ${humanAge(12)}`);
console.log(`Вводим 19 -> ${humanAge(19)}`);
console.log(`Вводим 60 -> ${humanAge(60)}`);


function humanAge(age) {
   if(age >= 0 || age <= 12 )
      {return 'ребенок';}
   else if (age >= 12 || age < 18)
      return 'подросток';
   else if (age >= 18 || age < 60)
      return 'взрослый';
   else if (age >= 60 )
      return 'пенсионер';
}