'use strict';

// работа с модальным окном без использования JQuery
/*
openModal.addEventListener("click", function () {
   modal.style.display = "block";
 });
 
 closeModal.addEventListener("click", function () {
   modal.style.display = "none";
 });
*/

// JQuery работа с модальным окном через классы 
$('#openModal').click(event =>
   $('#modal')
      .removeClass('nondisplay')
);

$('#closeModal').click(event =>
   $('#modal')
      .addClass('nondisplay')
);