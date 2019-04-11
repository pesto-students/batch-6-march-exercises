
function placeInMiddle(array, arrayToMerge) {
  const middleIndex = Math.floor(array.length / 2);
  const startArray = array.slice(0, middleIndex);
  const lastArray = array.slice(middleIndex);

  return [...startArray, ...arrayToMerge, ...lastArray];
}

export {
  placeInMiddle,
};
