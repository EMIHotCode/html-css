'use strict';
const
  cat = './img/cat256x256.png',
  ok = './img/thumbs-up.png',
  bad = './img/thumbs-down.png';

  function loadImgChain(src, okSrc, errorSrc) {
// Функция-обертка для загрузки изображения
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = src;

        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', () => reject(img));
        
        document.body.append(img);
    });
}

const span = document.createElement('span');

// Основная логика загрузки
loadImage(src)
    .then(function() {
        // Если картинка успешно загрузилась
        const okImg = document.createElement('img');
           okImg.src = okSrc;
           okImg.classList.add('loadAttrib');
        let okPromise = new Promise(function(resolve, reject){
           okImg.addEventListener('load', function() {resolve(okImg)});
           okImg.addEventListener('error', () => reject(okImg));
        });
        okPromise.then(
           result => {
              document.body.append(okImg);
              
              span.textContent = 'indicator ok';
              document.body.append(span);
           },
           error => { 
              document.body.append(okImg);
              
              span.textContent = 'indicator error';
              document.body.append(span);
           });
    },function() {
        // Если загрузка первой картинки провалилась
        const errorImg = document.createElement('img');
        errorImg.src = errorSrc;
        errorImg.classList.add('loadAttrib');
        let errorPromise = new Promise(function(resolve, reject){
           errorImg.addEventListener('load', function() {resolve(errorImg)});
           errorImg.addEventListener('error', () => reject(errorImg));
        });
        errorPromise.then(
           result => {
              document.body.append(errorImg);
              
              span.textContent = 'indicator ok';
              document.body.append(span);
           },
           error => { 
              document.body.append(errorImg);
              
              span.textContent = 'indicator error';
              document.body.append(span);
           });
    });
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