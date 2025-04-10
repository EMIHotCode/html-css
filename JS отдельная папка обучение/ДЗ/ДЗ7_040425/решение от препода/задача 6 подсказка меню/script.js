'use strict';
const floatDiv = document.querySelector('.float');

floatDiv.addEventListener('dragend', event => {
  floatDiv.style.left = event.clientX + 'px';
  floatDiv.style.top = event.clientY + 'px';
});

function magic() {
  document
    .querySelectorAll('.button-wrap')
    .forEach(div => div.addEventListener('mouseover', event => {
      const
        wrapDiv = event.currentTarget;
      if (wrapDiv.querySelector('button').getBoundingClientRect().top < parseInt(getComputedStyle(wrapDiv, '::after').height))
        wrapDiv.classList.add('tip-bottom');
      else
        wrapDiv.classList.remove('tip-bottom');
    }));
}
