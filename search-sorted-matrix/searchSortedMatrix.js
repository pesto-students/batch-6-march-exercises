
function searchSortedMatrix({ search, matrix }) {
  let found = false;
  let index = null;
  for (const array of matrix) {
    index = array.indexOf(search);
    if (index >= 0) {
      found = true;
      break;
    }
  }

  return found;
}

export {
  searchSortedMatrix,
};
