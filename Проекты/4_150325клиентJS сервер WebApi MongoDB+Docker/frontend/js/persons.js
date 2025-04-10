﻿let formGetPersons = document.getElementById("formGetPersons");
formGetPersons.addEventListener("submit", async (event) => {
   event.preventDefault();

   try {
      const url = `http://localhost:5173/api/persons`;
      let response = await fetch(url, {
         method: 'GET'
      });
      let persons = await response.json();
      console.log(persons);
      let personsContainer = document.getElementById("persons");
      personsContainer.innerHTML = '<ul class="list-group">';
      for (const person of persons) {
         const date = new Date(person.date_of_birth).toLocaleDateString();
         personsContainer.innerHTML +=`
<li class="list-group-item">
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <p>${person.last_name} ${person.first_name}, ${date}</p>
            </div>
            <div class="col">
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="deletePerson('${person.id}')">Удалить</button>
            </div>
        </div>
    </div>
</li>
`;
      }
      personsContainer.innerHTML += '</ul>';
   } catch (err) {
      console.error(err);
   }
});

let formAddPerson = document.getElementById("formAddPerson");
formAddPerson.addEventListener("submit", async (event) => {
   event.preventDefault();

   const url = `http://localhost:5173/api/persons`;
   try {
      let formData = new FormData(formAddPerson)   /* позволяет получать значения из тега form */
      let formDataJson = JSON.stringify(Object.fromEntries(formData)); /* из полученных formData значений создать представление json в виде ключ значение*/
      console.log(formDataJson);

      await fetch(url, {  /* отправляем запрос на сервер */
         method: 'POST',  /* используя метод POST */
         headers: {
            'Content-Type': 'application/json;charset=utf-8' /* тип отправляемых данных json в кодировке utf-8 */
         },
         body: formDataJson,  /* в теле будет использоваться строковое представление данных json */
         mode: 'cors'   /* тип политики */
      });
   }
   catch (err) {
      console.error(err);
   }
});

async function deletePerson(personId) {
   const url = `http://localhost:5173/api/persons/${personId}`;
   await fetch(url, {
      method: 'DELETE'
   });
}