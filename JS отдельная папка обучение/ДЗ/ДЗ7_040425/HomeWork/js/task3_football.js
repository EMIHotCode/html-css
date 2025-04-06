'use strict';

const field = document.querySelector('main'),
      ball = document.querySelector('#ball');


field.addEventListener("click", function (event) {

   let ballCoords = {
      left: event.clientX - ball.clientWidth / 2,
      top: event.clientY - ball.clientHeight / 2
   };

   if (ballCoords.left < 0) ballCoords.left = 0;
   if (ballCoords.top < 0) ballCoords.top = 0;

   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
   ballCoords.left = field.clientWidth - ball.clientWidth;
   }

   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
   ballCoords.top = field.clientHeight - ball.clientHeight;
   }

   ball.style.left = ballCoords.left + 'px';
   ball.style.top = ballCoords.top + 'px';
});
