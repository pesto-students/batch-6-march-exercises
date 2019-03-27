
function pairwise(numberArray, requiredSum) {
  const usedIndices = [];
  function isUsedIndex(index) {
    return usedIndices.some(usedIndex => index === usedIndex);
  }
  numberArray.forEach((currentNumber, currentIndex) => {
    if (currentNumber < requiredSum && !isUsedIndex(currentIndex)) {
      for (let i = 0; i < numberArray.length; i += 1) {
        if (
          !isUsedIndex(i) && currentIndex !== i && numberArray[i] + currentNumber === requiredSum
        ) {
          usedIndices.push(currentIndex, i);
          break;
        }
      }
    }
  });
  const resultSum = usedIndices
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return resultSum;
}

export {
  pairwise,
};
