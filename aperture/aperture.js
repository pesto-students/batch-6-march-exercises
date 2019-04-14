
function aperture(tupleLength, array) {
  if (tupleLength > array.length) {
    return [];
  }
  const result = [];
  const numOfTuple = array.length + 1 - tupleLength;
  for (let i = 0; i < numOfTuple; i += 1) {
    result.push(array.slice(i, i + tupleLength));
  }
  return result;
}

export {
  aperture,
};
