
function searchSortedMatrix({ search, matrix }) {
  for (const array of matrix) {
    const firstElement = array[0];
    if (firstElement <= search) {
      if (array.includes(search)) {
        return true;
      }
    } else if (firstElement > search) {
      const index = matrix.indexOf(array) - 1;
      if (matrix[index].includes(search)) {
        return true;
      }
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
