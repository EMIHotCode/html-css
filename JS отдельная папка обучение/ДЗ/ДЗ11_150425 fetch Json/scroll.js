'use strict';

const
  // main = document.querySelector('main'),
  fragment = document.querySelector('template#post').content,
  spinner = document.querySelector('#spinner');

let
  postId = 0,
  fetching = false;

// spinner.addEventListener('click', fetchPost);
window.addEventListener('scroll', scrollListener, { passive: true });
window.addEventListener('resize', scrollListener);

addPostWhileSpinnerVisible(); // первоначально заполняем страницу новостями

async function addPostWhileSpinnerVisible() {
  fetching = true;
  do {
    await fetchPost();
  } while (visible(spinner));
  fetching = false;
}

function scrollListener() {
  if (!visible(spinner) || fetching) return;
  // if (visible(spinner) && idle)
  addPostWhileSpinnerVisible();
}

function visible(element) {
  return element.getBoundingClientRect().top < window.innerHeight;
}


async function fetchPost() {
  const
    resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + ++postId + '?' + Math.random()),
    post = await resp.json();
  addNewPost(post);
}

function addNewPost({ id, title, body }) {
  const
    df = fragment.cloneNode(true);
  df.querySelector('.id').textContent = id;
  df.querySelector('.title').textContent = title;
  df.querySelector('.body').textContent = body;
  spinner.before(df);
}