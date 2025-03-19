let output = document.getElementById('output')

let form = document.getElementById('form')
   form.addEventListener ('submit', (e) => {
   e.preventDefault();

   fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then(response => response.json())
   .then(json => {
      for (const jsonKey in json) {  // можно обойтись без цикла так как там только одна запись
         output.innerHTML = `<p><span>user ID:</span> ${json.userId}</p> 
                              <h1>${json.title}</h1
                              <p>${json.body}</p>`// вставляем в нашу страницу данные из get запроса создавая новые теги
         //output.innerText += `${jsonKey}: ${json[jsonKey]}`;  // легкий вывод всех данных вперемешку друг за другом
      }
   })
});


// проверка сколько дочерних элементов содержит тег body
// for (let i = 0; i < document.body.childNodes.length; i++) {
//    console.log( document.body.childNodes[i] );} // Text, DIV, Text, UL, ..., SCRIPT

//console.log('hello world')n