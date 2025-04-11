'use strict';
const
  cover = document.getElementById('cover');
// open = document.getElementById('open-modal'),
// close = document.querySelector('#cover div.window button'),

// open.addEventListener('click',()=>cover.classList.remove('hidden'));
// close.addEventListener('click',()=>cover.classList.add('hidden'));


document.querySelectorAll('#open-modal, #cover>div>button')   // [open,close]
  .forEach(button =>
    button.addEventListener('click', () => cover.classList.toggle('hidden'))
  );

