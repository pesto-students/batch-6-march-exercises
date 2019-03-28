const flatten = array => array.reduce(
  (accumulator, nextElement) => (Array.isArray(nextElement)
    ? accumulator.concat(flatten(nextElement))
    : accumulator.concat(nextElement)),
  [],
);

function steamrollArray(nestedArray) {
  return flatten(nestedArray);
}

export { steamrollArray };
