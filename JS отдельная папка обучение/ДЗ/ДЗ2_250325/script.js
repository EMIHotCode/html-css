"use strict";


//0. Функция возвращает массив из n случайных чисел.
function returnRandomArray(){
    const array = [];
    array.length = parseInt(Math.random()*15+1);
    
    for (let i = 0; i < array.length; i++){
        array[i] = parseInt(Math.random()*15+1);
    }
    return array;
}

//1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
function returnArrayAsStrin(){
    const array = returnRandomArray();
    let str = '';
    for (let i = 0; i < array.length; i++){
        if (i === Number(array.lengt - 1)){
            str += String(array[i]);
            break;
        }
        str += String(array[i])+',';
    }
    return str;
}


console.log('Задание 0');
console.log('Функция возвращает массив из n случайных чисел.');
console.log(`Вывод функции -> ${returnRandomArray()}`);
console.log(`Вывод функции -> ${returnRandomArray()}`);
console.log(`Вывод функции -> ${returnRandomArray()}`);

console.log('\n\n\nЗадание 1');
console.log('Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)');
console.log(`Вывод функции -> ${returnArrayAsStrin()}`);
console.log(`Вывод функции -> ${returnArrayAsStrin()}`);
console.log(`Вывод функции -> ${returnArrayAsStrin()}`);



