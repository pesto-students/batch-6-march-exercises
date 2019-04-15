
function updateObject(idx, item, array) {
  const index = idx < 0 ? array.length + idx : idx;
  if (index < 0 || index >= array.length) {
    return array;
  }
  const newArray = [...array];
  newArray[index] = item;
  return newArray;
}

export {
  updateObject,
};
