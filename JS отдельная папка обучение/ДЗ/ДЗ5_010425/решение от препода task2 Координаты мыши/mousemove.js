/* eslint-disable no-fallthrough */
'use strict';
const
  yellow = document.getElementById('yellow'),
  outputX = yellow.querySelector('#yellow output.x'),
  outputY = yellow.querySelector('#yellow output.y');

yellow.addEventListener('mousemove', moveListener);
yellow.addEventListener('click', clickListener);
yellow.addEventListener('contextmenu', clickListener);
yellow.addEventListener('mousedown', clickListener);

function moveListener(event) {
  outputX.value = event.clientX.toString().padStart(4, '_');
  outputY.value = event.clientY.toString().padStart(3, '_');
}

function clickListener(event) {
  const
    div = event.currentTarget;
  let
    text = ['левая кнопка', 'колесико', 'правая кнопка'][event.button]; // [event.which] устарело 

  switch (event.type) {
    case 'contextmenu':
      event.preventDefault(); // контекстное меню не показывается 

    case 'click':
      text += ' клик';

    case 'mousedown': {
      const
        el = document.createElement('output'); // создаем новый элемент output
      el.className = 'button-name';
      el.value = text;
      div.querySelector('output.button-name').replaceWith(el); // заменяем старый, чтоб сработала keyframes анимация
    }
  }
}



