
function aperture(tupleLength, array) {
  return array.reduce((acc, elm, index) => {
    if (index + tupleLength > array.length) {
      return acc;
    }
    return [...acc, array.slice(index, index + tupleLength)];
  }, []);
}

export {
  aperture,
};
