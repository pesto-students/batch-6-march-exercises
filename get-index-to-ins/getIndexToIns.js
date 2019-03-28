function getIndexToIns(unsortedArray, value) {
  const sortedArray = unsortedArray.sort(
    (currentElement, nextElement) => currentElement - nextElement,
  );
  let index = sortedArray.findIndex(element => element > value);
  index = index === -1 ? sortedArray.length : index;
  index = sortedArray[index - 1] === value ? index - 1 : index;
  return index;
}

export { getIndexToIns };
