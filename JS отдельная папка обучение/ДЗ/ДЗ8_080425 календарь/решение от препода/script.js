'use strict';
const
  monthInput = document.getElementById('month-input'),
  table = document.querySelector('table.calendar'),
  today = new Date();

// было monthInput.value = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0')].join('-');
monthInput.valueAsDate = today;// стало

// было const [year, month] = monthInput.value.split('-');
monthInput.addEventListener('change', () =>
  document.startViewTransition(() =>  // см. https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
    table
      .querySelector('tbody')
      .replaceWith(monthFromDate(monthInput.valueAsDate))
  ));

monthInput.dispatchEvent(new Event('change')); // программный вызов слушателя

/**
 * Получить неделю как TR
 * @param {number} monday - число приходящееся на первый понедельник, может быть отрицательным
 * @param {number} daysNumber - число дней в месяце
 * @returns {HTMLTableRowElement}
 */
function weekAsTR(monday, daysNumber) {
  const
    tr = document.createElement('TR');
  for (let i = 0; i < 7; i++) {
    const
      td = document.createElement('TD'),
      date = monday + i;
    if (date > 0 && date <= daysNumber)
      td.textContent = date;
    if (date > 0)
      td.style.viewTransitionName = `td-${date}`; // View_Transition_API
    tr.append(td);
  }
  return tr;
}

/**
 * Получить месяц как TBody
 * @param {number} startShift - число пустых клеток в начале месяца
 * @param {number} daysNumber - число дней в месяце
 * @returns {HTMLTableSectionElement}
 */
function monthAsTbody(startShift, daysNumber) {
  const
    tbody = document.createElement('tbody');
  for (let weekStart = 1 - startShift; weekStart <= daysNumber; weekStart += 7)
    tbody.append(weekAsTR(weekStart, daysNumber));
  return tbody;
}

/**
 * Получить по дате месяц как TBody
 * @param {Date} date 
 * @returns {HTMLTableSectionElement}
 */
function monthFromDate(date) {
  const
    year = date.getFullYear(),
    month = date.getMonth(),
    daysInMonth = (new Date(year, month + 1, 0)).getDate(), // число предшествующее 1 числу (нулевое) следующего месяца и есть число дней в текущем
    firstDayOfWeek = (new Date(year, month, 1)).getDay(),   // ВС=0 ПН=1 ВТ=2 .. СБ=6 
    startShift = (-1 + firstDayOfWeek + 7) % 7;             //      ПН=0 ВТ=1 .. СБ=5 ВС=6
  return monthAsTbody(startShift, daysInMonth);
}