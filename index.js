document.getElementById("addRowBtn").addEventListener("click", addRow);
document.getElementById("addColumnBtn").addEventListener("click", addColumn);
document.getElementById("deleteRowBtn").addEventListener("click", deleteRow);
document
  .getElementById("deleteColumnBtn")
  .addEventListener("click", deleteColumn);

function addRow() {
  let table = document.getElementById("myTable");
  let newRow = table.insertRow();

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  cell1.textContent = "Новая строка, Ячейка 1";
  cell2.textContent = "Новая строка, Ячейка 2";
}

function addColumn() {
  let table = document.getElementById("myTable");

  for (let i = 0; i < table.rows.length; i++) {
    let cell = table.rows[i].insertCell(-1);
    cell.textContent = "Новая строка, Ячейка " + table.rows[i].cells.length;
  }
}

function deleteRow() {
  let table = document.getElementById("myTable");
  let lastRow = table.rows.length - 1;

  if (lastRow > 0) {
    table.deleteRow(lastRow);
  }
}

function deleteColumn() {
  let table = document.getElementById("myTable");
  let lastColumn = table.rows[0].cells.length - 1;

  if (lastColumn > 0) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(lastColumn);
    }
  }
}
