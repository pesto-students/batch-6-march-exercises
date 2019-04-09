const tableNodes = document.getElementById('myTable').childNodes[1].childNodes;

// eslint-disable-next-line no-unused-vars
const changeContent = (row, column, string) => {
  tableNodes[row].childNodes[column].innerHTML = string;
};
