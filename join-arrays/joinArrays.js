
function joinArrays(...arrays) {
  return arrays.reduce((finalArray, currentArray) => [...finalArray, ...currentArray]);
}

export {
  joinArrays,
};
