function findLargest(array) {
  return array.reduce((prev, next) => Math.max(prev, next), array[0]);
}
function largeOfFour(nestedArray) {
  const arrayOfLargest = nestedArray.map(array => findLargest(array));
  return arrayOfLargest;
}

export { largeOfFour };
