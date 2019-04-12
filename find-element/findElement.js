
function findElement(arrayToSearch, searchFunction) {
  return arrayToSearch.filter(searchFunction)[0];
}

export {
  findElement,
};
