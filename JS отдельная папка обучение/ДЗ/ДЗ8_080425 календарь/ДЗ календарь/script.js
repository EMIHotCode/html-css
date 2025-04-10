let 
   date = document.querySelector('input'),
   currentDate = date.valueAsDate = new Date(),
   lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

const
   dateText = document.querySelector('caption'),
   months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

currentDate.setHours(0, 0, 0, 0);
dateText.textContent = months[currentDate.getMonth()]+', '+currentDate.getFullYear();
currentDate.setDate(1);
createCalendar (currentDate, lastDate);


date.addEventListener('input', function () {
   currentDate = date.valueAsDate;
   currentDate.setHours(0, 0, 0, 0);
   lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
   dateText.textContent = months[currentDate.getMonth()]+', '+currentDate.getFullYear();
   createCalendar (currentDate, lastDate);
});
   
function createCalendar (currentDate, lastDate) {
   let table = document.querySelector("table>tbody");
   table.textContent ="";
   previousMonday (currentDate);

   while ( currentDate <= lastDate) {                  // строим таблицу
      const tr = document.createElement("tr");
         for (let i = 0; i < 7; i++) {                 // строим очередную неделю
            const td = document.createElement("td");
            if ( currentDate.getMonth() == lastDate.getMonth() ) { // показывать только даты заданного
                  td.textContent = currentDate.getDate();  // месяца
            }
            tr.append(td);
            currentDate.setDate(currentDate.getDate() + 1); // листаем дату вперёд
         }
         table.append(tr);
      }
}

// функция нахождения ближайшего понедельника
function previousMonday (currentDate){
   while ( currentDate.getDay() != 1 ) { 
      currentDate.setDate(currentDate.getDate() - 1);  // (листаем дату назад)
   }
   return currentDate;
}