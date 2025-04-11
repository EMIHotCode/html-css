'use strict';
// $('#example-1-show').click(_ => $('#example-1-modal').removeClass('hidden'));
// $('#example-1-hide').click(_ => $('#example-1-modal').addClass('hidden'));
$('#example-1-show,#example-1-hide').click(_ => $('#example-1-modal').toggleClass('hidden'));

// ----------------------- Example 2 --------------------------------------------------
$('<button>')
  .text('Ok(2)')
  .click(_ => $('#example-2-modal').addClass('hidden'))
  .appendTo('<div>')
  .parent()
  .prepend('<span>Hello from Modal window (2)')
  .appendTo('<div>')
  .parent()
  .attr('id', 'example-2-modal')
  .addClass('modal-back hidden')
  .appendTo('body')
  // .toArray().map(x=>console.log(x)) //можно включать для отладки
  ;

$('<button>', { id: 'example-2-show' })
  .text('Show modal (2)')
  .click(_ => $('#example-2-modal').removeClass('hidden'))
  .insertAfter('#example-1-show');