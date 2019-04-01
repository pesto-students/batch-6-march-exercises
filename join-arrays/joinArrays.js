
function joinArrays(...arrays) {
  return arrays.reduce((concatinatedArray, array) => concatinatedArray.concat(array));
}

export {
  joinArrays,
};
