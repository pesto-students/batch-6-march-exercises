
function joinArrays(...arrays) {
  return arrays.reduce((acc, val) => [...acc, ...val]);
}

export {
  joinArrays,
};
