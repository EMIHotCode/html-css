'use strict';

function addSpan(text) { // одна для всех случаев
  const
    span = document.createElement('span');
  span.textContent = text;
  document.body.append(span);
}

// вариант callback -----------------------------------------------------------------
function createImg1(src, onLoad, onError) { // callback style
  const img = document.createElement('img');
  img.addEventListener('load', onLoad);
  img.addEventListener('error', onError);
  img.src = src;
  document.body.append(img);
}

function loadImgChain1(src, okSrc, errorSrc) { // callback style
  createImg1(src,
    () => createImg1(okSrc,
      () => addSpan('indicator ok (++)'),
      () => addSpan('indicator error(+-)')),
    () => createImg1(errorSrc,
      () => addSpan('indicator ok (-+)'),
      () => addSpan('indicator error(--)'))
  );
}

// вариант promise ------------------------------------------------------------------
function createImg2(src) { // promise style
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
    img.src = src;
    document.body.append(img);
  });
}

function loadImgChain2(src, okSrc, errorSrc) { // promise style
  createImg2(src)
    .then(() => createImg2(okSrc), () => createImg2(errorSrc))
    .then(() => addSpan('indicator ok'), () => addSpan('indicator error'));
}

// вариант  async/await --------------------------------------------------------------
function createImg3(src) { // createImg3 и createImg2 полностью взаимозаменяемы 
  const
    img = document.createElement('img'),
    { promise, resolve, reject } = Promise.withResolvers(); // новая возможность
  img.addEventListener('load', resolve);
  // img.addEventListener('error', evt => {throw evt}); // такой throw не поймает никакой try-catch !!!
  img.addEventListener('error', reject);
  img.src = src;
  document.body.append(img);
  return promise;
}

async function loadImgChain3(src, okSrc, errorSrc) { // async/await style
  let res1;
  try { // тут просто пишем оптимистичный сценарий, когда все идет хорошо
    res1 = await createImg3(src); // переменная для понимания на каком этапе ошибка
    await createImg3(okSrc);
    addSpan('indicator ok(++)');
  } catch (err) {
    if (!res1) { // ошибка с первой картинкой
      try {
        await createImg3(errorSrc);
        addSpan('indicator ok(-+)');
      }
      catch {
        addSpan('indicator error (--)');
      }
    } else { // ошибка с индикатором
      addSpan('indicator error (+-)');
    }
  }
}


const
  cat = 'https://www.svgimages.com/svg-image/s10/cute-cat-clip-art-256x256.png',
  ok = 'https://em-content.zobj.net/source/microsoft-teams/363/thumbs-up_1f44d.png',
  bad = 'https://em-content.zobj.net/source/microsoft-teams/363/thumbs-down_1f44e.png';

const
  style = document.createElement('style');
style.textContent = 'img{outline:1px solid blue;padding:10px;margin:10px;}span{margin:10px;}';
document.head.append(style);

function test(functN, testN) {
  const
    loadImgChain = [loadImgChain1, loadImgChain2, loadImgChain3][functN];
  document.body.innerHTML = '';
  console.log('test ', ['callback', 'promise', 'async/await'][functN] + '-style function', loadImgChain.name, ' for', testN, 'case');
  switch (testN) {
    case 0: loadImgChain(cat, ok, bad); return '[😺] [👍] indicator ok';
    case 1: loadImgChain(cat, '-', bad); return '[😺] [ ] indicator error';
    case 2: loadImgChain('-', ok, bad); return '[ ] [👎] indicator ok';
    case 3: loadImgChain('-', ok, '-'); return '[ ] [ ] indicator error';
  }
}

function testTask(i) {
  console.log('check the expected result:', test(~~(i / 4), i % 4));
  if (++i < 12)
    document.addEventListener('click', () => testTask(i), { once: true });
  else
    console.log('the end');
}

testTask(0);