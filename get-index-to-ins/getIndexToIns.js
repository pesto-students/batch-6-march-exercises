
function getIndexToIns(numberArray, numberToCheck) {
  let numberPosition = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] < numberToCheck) {
      numberPosition += 1;
    }
  }
  return numberPosition;
}

export {
  getIndexToIns,
};
