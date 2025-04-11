'use strict';

//Без использования JQuery
/*
let 
   modalOpen = document.querySelector('#openModal'),
   modalClose = document.querySelector('#closeModal'),
   modalWindow = document.querySelector('#modal');

modalOpen.addEventListener("click", function () {
   modalWindow.classList.remove('nondisplay');
 });
 
 modalClose.addEventListener("click", function () {
   modalWindow.classList.add('nondisplay');
 });
*/

// Используем JQuery работа с модальным окном через классы 
$('#openModal').click(event =>
   $('#modal')
      .removeClass('nondisplay')
);

$('#closeModal').click(event =>
   $('#modal')
      .addClass('nondisplay')
);
