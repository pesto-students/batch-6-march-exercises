
function joinArrays(...array) {
  return array.reduce((joinedArray, currentItem) => joinedArray.concat(currentItem), []);
}


export {
  joinArrays,
};
