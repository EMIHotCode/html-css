'use strict';

const posts = document.querySelectorAll('.post');
console.log(posts.isArray);
posts.forEach(post => {

   let title = post.querySelector(".title");

   let xButton = document.createElement("button");
   xButton.className = "remove-button";
   xButton.textContent = 'X[remove]';
   
   xButton.addEventListener('click', function () {post.remove()});
   title.append(xButton);
});