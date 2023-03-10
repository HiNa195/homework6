/* Homework 6
   Exercise 5 JavaScript code
   -- Display a table
*/

const x = document.getElementById('output');

// Create an array
const array = [];
for (let i = 1; i <= 12; i++) {
   array.push(i);
}

function makeTable(array) {
   // Create a table object
   let table = document.createElement('table');
   for (arr of array) {
      let row = document.createElement('tr');
      let cell = document.createElement('td');
      cell.textContent = arr;
      row.appendChild(cell);
      table.appendChild(row);
      if (arr % 4 === 0) {
         cell.style.backgroundColor = 'LightBlue';
      }
   }
   return table;
}

x.appendChild(makeTable(array));


/*
//
function makeTable(array) {
   // Create a table object
   let table = document.createElement('table');
   for (arr of array) {
      let row = document.createElement('tr');
      row.textContent = arr;
      table.appendChild(row);
   }
   return table;
}
//
function makeTable(array) {
   // Create a table object
   let table = document.createElement('table');
   for (arr of array) {
      let text = table.insertRow();
      text.textContent = arr;
   }
   return table;
}
//
function makeTable(array) {
   // Create a table object
   let table = document.createElement('table');
   for (arr of array) {
      table.insertRow();
      // Insert a cell into the table element
      // Vertical table
      let cell = table.rows[table.rows.length - 1].insertCell();
      // Horizontal table
      // let cell = table.rows[0].insertCell();
      // Add text to the created cell element
      cell.textContent = arr;
   }
   return table;
}
*/