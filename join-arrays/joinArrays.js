
function joinArrays(...arrays) {
  return arrays.reduce((finalArray, currentArray) => finalArray.concat(currentArray));
}

export {
  joinArrays,
};
