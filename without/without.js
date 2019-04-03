
function without(array1, array2) {
  const isInArray1 = item => array1.indexOf(item) === -1;

  return array2.filter(isInArray1);
}

export {
  without,
};
