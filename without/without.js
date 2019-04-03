
function without(filterArray, array) {
  return array.filter(item => filterArray.every(el => item !== el));
}

export {
  without,
};
