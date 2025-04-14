'use strict';
    const
      cat = './img/cat256x256.png',
      ok = './img/thumbs-up.png',
      bad = './img/thumbs-down.png';

function loadImgChain(src, okSrc, errorSrc) {
   const span = document.createElement('span');
   const img = loadImage(
      src,
      () => {
         const okImg = loadImage(
         okSrc,
         () => {
            span.textContent = 'indicator ok';
         },
         () => {
            span.textContent = 'indicator error';
         }
         );
         okImg.classList.add('loadAttrib');
         document.body.append(okImg);
         document.body.append(span);
      },
      () => {
         const errorImg = loadImage(
         errorSrc,
         () => {
            span.textContent = 'indicator ok';
         },
         () => {
            span.textContent = 'indicator error';
         }
         );
         errorImg.classList.add('loadAttrib');
         document.body.append(errorImg);
         document.body.append(span);
      }
   );
  document.body.append(img);
}


function loadImage(src, onload, onerror) {
   const img = document.createElement('img');
   img.src = src;
   img.addEventListener('load', function() {
      onload(img);
   });
   img.addEventListener('error', function() {
      onerror(img);
   });
   return img;
}


// в ручном режиме с чистым body (document.body.innerHTML=''), запускаем по одной строке и смотрим результат  
//loadImgChain(cat,ok,bad);  // [😺] [👍] indicator ok
//loadImgChain(cat,'-',bad); // [😺] [ ] indicator error
// loadImgChain('-',ok,bad);  // [ ] [👎] indicator ok
// loadImgChain('-',ok,'-');  // [ ] [ ] indicator error

//либо используем такой код для тестирования:
function test(m) {  
  document.body.innerHTML = '';
console.log('test ',m);
  switch (m) {
    case 0: loadImgChain(cat, ok, bad); return;  // [😺] [👍] indicator ok
    case 1: loadImgChain(cat, '-', bad); return; // [😺] [x] indicator error
    case 2: loadImgChain('-', ok, bad); return;  // [x] [👎] indicator ok
    case 3: loadImgChain('-', ok, '-'); return;  // [x] [x] indicator error
  }
}
function testTask(i) {
  test(i);
  if (++i < 4)
    document.addEventListener('click', _ => testTask(i), { once: true })
}
testTask(0);

