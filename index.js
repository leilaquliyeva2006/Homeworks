function createTable(n, m) {
  var table = document.createElement("table");

  for (var i = 0; i < n; i++) {
    var row = table.insertRow();

    for (var j = 0; j < m; j++) {
      var cell = row.insertCell();
      cell.textContent = "Строка " + (i + 1) + ", Ячейка " + (j + 1);
    }
  }

  document.body.appendChild(table);
}

createTable(3, 4);
