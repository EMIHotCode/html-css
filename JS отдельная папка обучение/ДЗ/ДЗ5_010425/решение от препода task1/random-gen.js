'use strict';

function gen(event) {
  const
    button = event.currentTarget, // == button
    div = button.closest('.random-generator'),  // div
    span = div.querySelector('span');  // span                                   
  span.textContent = Math.ceil(100 * Math.random());
}

document.querySelectorAll('.random-generator button')
  .forEach(button => button.addEventListener('click', gen));

