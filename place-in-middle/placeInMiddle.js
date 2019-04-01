
function placeInMiddle(baseArray, insertionArray) {
  const middle = Math.floor(baseArray.length) / 2;
  const leftArray = baseArray.slice(0, middle);
  const rightArray = baseArray.slice(middle);
  return [...leftArray, ...insertionArray, ...rightArray];
}

export {
  placeInMiddle,
};
