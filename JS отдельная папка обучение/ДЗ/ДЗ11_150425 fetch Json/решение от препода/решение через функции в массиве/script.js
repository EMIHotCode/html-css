'use strict';
const thead = document.querySelector('thead tr'),
  tbody = document.querySelector('tbody'),
  cols = 'Номер, Имя,Email,Адрес,Телефон,Website,Компания'.split(','),
  format = [
    user => user.id,
    ({ name, username }) => `${name} <small>(${username})</small>`,
    ({ email }) => `<a href="mailto:${email}">${email}</a>`,
    ({ address }) => `<a href="https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}">${address.suite}, ${address.street}, ${address.city}</a>`,
    ({ phone }) => `<a href="tel:${phone}">${phone}</a>`,
    ({ website }) => `<a href="//${website}">${website}</a>`,
    ({ company }) => `<span title=${company.catchPhrase}>${company.name}</span>`
  ];

go();

async function go() {
  thead.append(...cols.map(c => $('th', c)));
  render(await (await fetch('https://jsonplaceholder.typicode.com/users')).json());
}

function userTr(user) {
  const
    tr = $('TR');
  tr.append(...format.map(fn => $('TD', fn(user))));
  return tr;
}

function render(users) {
  tbody.append(...users.map(user => userTr(user)));
}


function $(tag, HTML) {
  const
    el = document.createElement(tag);
  if (HTML)
    el.innerHTML = HTML;
  return el;
}