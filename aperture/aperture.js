function aperture(...args) {
  const tupleSize = args[0];
  const numbers = args[1];
  if (tupleSize > numbers.length) { return []; }
  return (numbers.reduce((apertureArray, listItem, index) => {
    const isInLimitOfNTuple = index + tupleSize < numbers.length + 1;
    if (isInLimitOfNTuple) {
      apertureArray.push(numbers.slice(index, index + tupleSize));
      return apertureArray;
    }
    return apertureArray;
  }, []));
}

export {
  aperture,
};
