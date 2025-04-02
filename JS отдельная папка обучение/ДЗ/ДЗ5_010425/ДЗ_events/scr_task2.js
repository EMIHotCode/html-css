'use strict';

const
   div = document.getElementById('board');


function rightClick(event){
   event.preventDefault();
   div.textContent = 'x = '+event.offsetX+' : y = '+event.offsetY +'\r\n нажата Right_MB';
}

function leftClick(event){
   div.textContent = 'x = '+event.offsetX+' : y = '+event.offsetY +'\r\n нажата Left_MB';
}

function mouseMove(event){
   div.textContent = 'x = '+event.offsetX+' : y = '+event.offsetY;
   event.stopPropagation();
}

div.addEventListener('click', leftClick);
div.addEventListener('contextmenu', rightClick);
div.addEventListener('mousemove', mouseMove);
