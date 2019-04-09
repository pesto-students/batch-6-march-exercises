const table = document.getElementById('myTable');

// eslint-disable-next-line no-unused-vars
const createTable = (row = 4, column = 4) => {
  let tableString = '';
  for (let i = 0; i < row; i += 1) {
    tableString += '<tr>';
    for (let j = 0; j < column; j += 1) {
      tableString += `<td>Row-${i + 1} Column-${j + 1}</td>`;
    }
    tableString += '</tr>';
  }
  table.innerHTML = tableString;
};
