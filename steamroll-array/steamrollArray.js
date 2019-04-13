function steamrollArray(nestedArray) {
  return nestedArray.reduce(
    (accumulator, nextElement) => (Array.isArray(nextElement)
      ? accumulator.concat(steamrollArray(nextElement))
      : accumulator.concat(nextElement)),
    [],
  );
}

export { steamrollArray };
