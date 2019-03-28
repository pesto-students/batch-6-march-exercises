
function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((nestedArray, currentValue) => {
    const lastArray = nestedArray[nestedArray.length - 1];
    if (lastArray.length < chunkSize) {
      lastArray.push(currentValue);
    } else {
      nestedArray.push([currentValue]);
    }
    return nestedArray;
  }, [[]]);
}

export {
  chunkArrayInGroups,
};
