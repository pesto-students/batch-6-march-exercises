
function getIndexToIns(numbers, testNumber) {
  const sortedArray = [...numbers].sort((a, b) => a - b);
  const index = sortedArray.findIndex(val => val >= testNumber);
  return index >= 0 ? index : sortedArray.length;
}

export {
  getIndexToIns,
};
