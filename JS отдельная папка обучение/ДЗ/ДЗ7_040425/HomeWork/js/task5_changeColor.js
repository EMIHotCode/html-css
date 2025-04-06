'use strict';


/*********** без делегирования ***********/
document
   .querySelectorAll('.firstList li')
   .forEach(book => book.addEventListener(
      'click',
      event => {
         let target = event.target;
            higlight(target);
         }
));

/*********** используем делегирование ***********/
document
   .querySelector('.secondList')
   .addEventListener(
      'click', 
      function (event) {
            const li = event.target.closest('li');
            higlight(li);
});   



function higlight(li) {
   document.querySelectorAll('.active').forEach(li => li.classList.remove('active'));
   if(li){
      li.classList.add('active');
   }
}

const addBookButton = document.querySelectorAll('.addBookButton');
addBookButton.forEach(button => button.addEventListener('click', function (event) {
   const
     list = event.target.closest('ol'),
     book = document.createElement('li');
     book.append('some new book test ');
   // обработчик ???
   list.append(book);
}));



