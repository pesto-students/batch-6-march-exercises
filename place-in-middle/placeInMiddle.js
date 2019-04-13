
function placeInMiddle(originalArray, arrayToBePlaced) {
  if (originalArray.length % 2 === 0) {
    // eslint-disable-next-line max-len
    return [...originalArray.slice(0, originalArray.length / 2), ...arrayToBePlaced, ...originalArray.slice(originalArray.length / 2)];
  }
  return [...arrayToBePlaced, ...originalArray];
}

export {
  placeInMiddle,
};
