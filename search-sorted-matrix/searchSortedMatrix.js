
function searchSortedMatrix({ search, matrix }) {
  return matrix.some((array) => {
    if (array[0] > search) {
      return false;
    }
    if (array[array.length - 1] < search) {
      return false;
    }
    return array.includes(search);
  });
}

export {
  searchSortedMatrix,
};
