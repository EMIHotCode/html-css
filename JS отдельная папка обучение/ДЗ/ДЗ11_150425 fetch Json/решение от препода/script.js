'use strict';
const
  thead = document.querySelector('thead tr'),
  tbody = document.querySelector('tbody'),
  cols = 'id,email,name,address.city,phone,website,company.name'.split(',');

go();

async function go() {
  thead.append(...cols.map(c => $('TH', capitalizeOneWord(c.replace('.', ' ')))));
  render(await (await fetch('https://jsonplaceholder.typicode.com/users')).json());
}

function userTr(user) {
  const
    tr = $('TR');
  // tr.append($('TD',user.name));
  // let a = $('A',user.email);
  // a.href=`mailto:${user.email}`;
  // tr.append($('TD',a));
  tr.append(...cols.map(c => $('TD', user[c] || c.split('.').reduce((prev, cur) => prev[cur], user))));
  return tr;
}

function render(users) {
  tbody.append(...users.map(user => userTr(user)));
}

function capitalizeOneWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function $(tag, ...content) {
  const
    el = document.createElement(tag);
  if (content.length)
    el.append(...content);
  return el;
}