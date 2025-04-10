'use strict';

document
  .querySelectorAll('.container button') // получим кнопки NEXT для всех светофоров
  .forEach(el => el.addEventListener('click', nextButtonClickListener)); // повесим на каждую слушатель клика

function nextButtonClickListener(event) {
  const
    containerDiv = event.target.closest('.container'), // поиск вверх найдем синенький div
    divTrafficLight = containerDiv.querySelector('[data-colors-order]'), // поиск вниз - найдем соответствующий кнопке светофор
    colorsOrder = divTrafficLight.dataset.colorsOrder.split(','); // получим массив с порядком классов из dataset элемента
  let
    state = +divTrafficLight.dataset.state || 0; // получим из dataset текущее состояние светофора в виде числа, если его нет то 0  
  divTrafficLight.classList.remove(colorsOrder[state % colorsOrder.length]); // уберем старый класс
  divTrafficLight.dataset.state = ++state; // увеличим счетчик и его сохраним в элементе
  divTrafficLight.classList.add(colorsOrder[state % colorsOrder.length]); // присвоим светофору новый соответствующий состоянию класс
  // if (state < 10) setTimeout(nextButtonClickListener,1000,event);
}