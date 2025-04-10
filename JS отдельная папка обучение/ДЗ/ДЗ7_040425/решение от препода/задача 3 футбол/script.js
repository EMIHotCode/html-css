'use strict';
const
  field = document.getElementById('field'),
  ball = document.getElementById('ball');
  
field.addEventListener('click', event => {  //  тут надо вызывать не mousemove на document.body, а  click на field
  const
    fieldBox = field.getBoundingClientRect(),
    ballBox = ball.getBoundingClientRect();
  let
    x = event.clientX - fieldBox.left, // координаты клика относительно field
    y = event.clientY - fieldBox.top;
  x -= ballBox.width / 2; // теперь сместим на половинку размера мяча 
  y -= ballBox.height / 2;
  x = clamp(x, 0, fieldBox.width - ballBox.width);
  y = clamp(y, 0, fieldBox.height - ballBox.height);
  // if (x < 0) x = 0; // пройдемся по границам
  // if (y < 0) y = 0;
  // if (x > fieldBox.width - ballBox.width)
  //   x = fieldBox.width - ballBox.width;
  // if (y > fieldBox.height - ballBox.height)
  //   y = fieldBox.height - ballBox.height;
  ball.style.left = x + 'px'; // выставим стили
  ball.style.top = y + 'px';
});

function clamp(val, min, max) {
  if (val < min) val = min;
  if (val > max) val = max;
  return val;
}
