'use strict';

const
   div = document.getElementById('rndNum'),
   button = document.querySelector('#btn');

function genRandNum(){
   const randNum = Math.floor(Math.random() * 101);
   div.textContent = randNum;
}
button.addEventListener('click', genRandNum);