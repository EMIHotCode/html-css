"use strict";

const
  one = [55, 1, 2, 44, 3, 1, 55],
  two = [3, 66, 2, 1, 77, 2, 66];

//0. Функция возвращает массив из n случайных чисел.
function returnRandomArray(){
    const array = [];
    array.length = parseInt((Math.random()*4)+5);
   
    for (let i = 0; i < array.length; i++){
        array[i] = parseInt(Math.random()*15+1);
    }
    return array;
}

//1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
function returnArrayAsStrin(massive){
    let str = '';
    for (let i = 0; i < massive.length; i++){
        if (i === massive.length - 1){
            str += String(massive[i]);
            break;
        }
        str += String(massive[i])+',';
    }
    return str;
}

//2. Функция принимает массив и возвращает новый, содержащий  только четные элементы из исходного
function returnEvenNumArray(massive){
   let array = [];
   let index = 0;
    for (let i = 0; i < massive.length; i++){
      if (massive[i]%2 === 0){
         array[index] = massive[i];
         index++;
      }
  }
   return returnArrayAsStrin(array);
}

//3. Функция принимает массив и возвращает сумму всех элементов массива.
function sumArrayNumbers(array) {
   let sum = [0];
   for (let i = 0; i < array.length; i++) {
     if (typeof(array[i])!= "number") continue;

   sum[0] += array[i];
   }

   return returnArrayAsStrin(sum);
 }

//4. Функция принимает массив и возвращает его максимальный элемент.
function maxElementInArray(array){
   // проверка если в массиве нет элементов
   if (array.length === 0) {
      return null;
   }

   let maxElement = [0];
   for (const item of array){
      if (typeof(item)!= "number") continue;
      
      if (maxElement[0] < item) maxElement[0] = item; 
   }
   
   return returnArrayAsStrin(maxElement);
}

//5. Функция добавления нового элемента в массив по указанному индексу. Функция имеет три параметра: исходный массив, индекс, и новый элемент, и возвращает новый массив с результатом вставки.
function addElementByIndex(array, index, val){
   let tempArray = [];
   for(let i = 0; i < array.length; i++){
      tempArray[i] = array[i];
   } 
   tempArray.length += 1;

   if(index < 0) return 'индекс не может быть меньше нуля';
   if(typeof(index)!= "number") return 'ведено не число на месте индекса';
   if(index > array.length) return 'индекс большой для данного массива';
   
   for(let i=tempArray.length-1; i>index; i--){
      // если нужно положить значение в последний индекс+1 новой длинны
      if(array.length+1 === index){
         tempArray[tempArray.length] = index;
         break;
      } 
      tempArray[i] = tempArray[i-1];
   }
   tempArray[index] = val;
   return returnArrayAsStrin(tempArray);
}

//6. Функция удаления элемента из массива по указанному индексу. Функция меет два параметра: исходный массив, индекс, и возвращает новый массив без элемента с указанным индексом.
function removeElementByIndex(array, index){
   const tempArray = [];

   if(index < 0 || typeof(index)!= "number" || index >= array.length) return 'неправильный индекс';
  
   for(let i=0, j=0; i<array.length; i++){
      if(i === index) continue;

      tempArray[j++] = array[i];
   }
   return returnArrayAsStrin(tempArray);
}

//Часть 2. Задание 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function unionArray(one, two){
   let unionTwoArray = [], combineOneTwo = [];
   let index = 0;

   for (const item of one){
      combineOneTwo[index] = item;
      index++;
   }
   for (const item of two){
      combineOneTwo[index] = item;
      index++;
   }

   for (let i = 0; i < combineOneTwo.length-1; i++){
      for (let j = i+1; j < combineOneTwo.length; j++){
         if(combineOneTwo[i] === combineOneTwo[j]){
            for(let k=j; k<combineOneTwo.length-1; k++){
               combineOneTwo[k] = combineOneTwo[k+1];
            }
            combineOneTwo.length -= 1;
            i -=1;
            break;
         }
      }
   }
   return returnArrayAsStrin(combineOneTwo);

}

//Часть 2. Задание 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах), без повторений.
function intersectionArrays(one, two){
   let intersecArray = [];
   let intersecIndex = 0;
   // проверка каждого числа из массива one c каждым поочередно из массива two для нахождения общего значения
   for (const itemOne of one){
      for (const itemTwo of two){
         // если элемент общий
         if (itemOne === itemTwo){ 
            let is_duplicate = false;
            // заносим его в массив intersecArray с проверкой на дублирование
            for (let i = 0; i < intersecIndex; i++){
               if (intersecArray[i] === itemOne){
                  is_duplicate = true;
                  break;
               }
            }
            if(!is_duplicate){
               intersecArray[intersecIndex] = itemOne;
               intersecIndex++;
            }
         }
      }
   }
return returnArrayAsStrin(intersecArray);   
}

//Часть 2. Задание 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве, без повторений.
function complementeArray(one, two){
   let complemArray = [];
   let index = 0;
   // проверка каждого числа из массива one c каждым поочередно из массива two
   for (const itemOne of one){
      let is_duplicate = false;
      for (const itemTwo of two){
         if (itemOne === itemTwo){
            is_duplicate = true;
            break;
         }
      }
      if(!is_duplicate){
         for (let i = 0; i < index; i++){
            if (complemArray[i] === itemOne){
               is_duplicate = true;
               break;
            }
         }
         if(!is_duplicate){
            complemArray[index] = itemOne;
            index++;
         }
      }
   
   }
return returnArrayAsStrin(complemArray);   
}

console.log('Задание 0');
console.log('Функция возвращает массив из n случайных чисел.');
console.log(`Вывод функции -> ${returnRandomArray()}`);
console.log(`Вывод функции -> ${returnRandomArray()}`);
console.log(`Вывод функции -> ${returnRandomArray()}`);

console.log('\n\n\nЗадание 1');
console.log('Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)');
console.log(`Вывод функции  -> ${returnArrayAsStrin(returnRandomArray())}`);
console.log(`Вывод функции  -> ${returnArrayAsStrin(returnRandomArray())}`);


console.log('\n\n\nЗадание 2');
console.log('Функция принимает массив и возвращает новый, содержащий  только четные элементы из исходного.');
let test = returnRandomArray();
console.log(`[${test}] -> ${returnEvenNumArray(test)}`);
console.log(`[3, 66, 2, 1, 77, 2, 66] -> ${returnEvenNumArray(two)}`);

console.log('\n\n\nЗадание 3');
console.log('Функция принимает массив и возвращает сумму всех элементов массива.');
test = returnRandomArray();
console.log(`[${test}] -> ${sumArrayNumbers(test)}`);
console.log(`[3, 66, 2, 1, 77, 2, 66] -> ${sumArrayNumbers(two)}`);
console.log(`[null, 'ab', 2, 1] -> ${sumArrayNumbers([null, 'ab', 2, 1])}`);

console.log('\n\n\nЗадание 4');
console.log('Функция принимает массив и возвращает его максимальный элемент.');
test = returnRandomArray();
console.log(`[${test}] -> ${maxElementInArray(test)}`);
console.log(`[3, 66, 2, 1, 77, 2, 66] -> ${maxElementInArray(two)}`);

console.log('\n\n\nЗадание 5');
console.log('Функция добавления нового элемента в массив по указанному индексу. функция имеет три параметра: исходный массив, индекс, и новый элемент, и возвращает новый массив с результатом вставки.');
test = returnRandomArray();
console.log(`[55, 1, 2, 44, 3, 1, 55] 555 по индексу 2 -> ${addElementByIndex(one, 2, 555)}`);
console.log(`[${test}] 222 по индексу 0 -> ${addElementByIndex(test, 0, 222)}`);

console.log('\n\n\nЗадание 6');
console.log('Функция удаления элемента из массива по указанному индексу. Функция меет два параметра: исходный массив, индекс, и возвращает новый массив без элемента с указанным индексом.');
console.log(`[55, 1, 2, 44, 3, 1, 55] удаление по индексу 2 -> ${removeElementByIndex(one, 2)}`);
test = returnRandomArray();
console.log(`[${test}] удаление по индексу 0 -> ${removeElementByIndex(test, 0)}`);

console.log('\n\n\nЧасть2 Задание 1');
console.log('Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.');
console.log(`[55, 1, 2, 44, 3, 1, 55] [3, 66, 2, 1, 77, 2, 66] -> ${unionArray(one, two)}`);
console.log(`[-1, 0, 2, 44, 55] [55, 66, -1, 77] -> ${unionArray([-1, 0, 2, 44, 55], [55, 66, -1, 77])}`);


console.log('\n\n\nЧасть2 Задание 2');
console.log('Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах), без повторений.');
console.log(`[55, 1, 2, 44, 3, 1, 55] [3, 66, 2, 1, 77, 2, 66] -> ${intersectionArrays(one, two)}`);
console.log(`[-1, 0, 2, 44, 55] [55, 66, -1, 77] -> ${intersectionArrays([-1, 0, 2, 44, 55], [55, 66, -1, 77])}`);


console.log('\n\n\nЧасть2 Задание 3');
console.log('Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве, без повторений.');
console.log(`[55, 1, 2, 44, 3, 1, 55] [3, 66, 2, 1, 77, 2, 66] -> ${complementeArray(one, two)}`);
console.log(`[-1, 0, 2, 44, 55] [55, 66, -1, 77] -> ${complementeArray([-1, 0, 2, 44, 55], [55, 66, -1, 77])}`);