'use strict';

fetchUsers();

// Функция для получения данных пользователей
async function fetchUsers() {
   try {
      const
         response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error(response.status);
      const
         users = await response.json();
      render(users);
   } catch (error) {
      const
         ed = document.createElement('div');
      ed.classList.add('error');
      ed.textContent = String(error);
      document.body.append(ed);
   }
   }

function renderUser(user) {
const
   df = document.getElementById('user-template').content.cloneNode(true);
df.querySelector('.id').textContent = user.id;
df.querySelector('.name').textContent = user.name;
df.querySelector('.email').textContent = user.email;
df.querySelector('.address').textContent = user.address.city;
df.querySelector('.phone').textContent = user.phone;
df.querySelector('.website').textContent = user.website;
df.querySelector('.company').textContent = user.company.name;
return df;
}

function render(users) {
document.querySelector('#user-list').append(...users.map(renderUser))
}   