'use strict';
const
  main = document.querySelector('main'),
  newButton = document.querySelector('button');

for (let i = 0; i < 3; i++)
  newArticle();

newButton.addEventListener('click', newArticle);

function newArticle() {
  const
    article = document.createElement('article'),
    button = document.createElement('button'),
    paragraph = document.createElement('p');
  paragraph.textContent = genText();
  button.textContent = 'delete';
  button.addEventListener('click',
    evt => evt.target.closest('article').remove());
  article.append(button);
  article.append(paragraph);
  main.append(article);
}


function genText() {  // Просто генерируем предложения из набора слов
  const
    lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor neque, quis pretium lacus. Nulla porta nisi ex, vel ultricies arcu eleifend eu. Cras laoreet lacinia viverra. Mauris sit amet sollicitudin magna. Maecenas efficitur arcu eu pharetra porta. Etiam at fringilla nisi, eu ornare sem. Sed egestas urna ac lacus malesuada, et ultrices nunc vehicula. Quisque vitae nisl ut nibh varius porttitor. Curabitur ac massa pharetra, gravida risus in, congue neque.'
      .replace(/[^\w\s]/g, '')
      .toLowerCase()
      .split(' ');
  let s = '';
  const wordCount = 20 + 100 * Math.random();
  for (let i = 0; i < wordCount; i++)
    s += ' ' + lorem[Math.trunc(Math.random() * lorem.length)];
  return s.replace(/^\s\w/, (c) => c.toUpperCase()) + '.';
}
