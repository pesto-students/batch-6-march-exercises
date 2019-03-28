
function findAllMultipliers(partialMultipliers, low, high) {
  if (low > high) {
    return partialMultipliers;
  }
  const hasAMultiple = partialMultipliers.some(number => number % high === 0);
  if (!hasAMultiple) {
    partialMultipliers.push(high);
  }
  return findAllMultipliers(partialMultipliers, low, high - 1);
}
function smallestCommons(numbers) {
  let smallerNumber;
  let largerNumber;
  if (numbers[0] < numbers[1]) {
    [smallerNumber, largerNumber] = numbers;
  } else {
    [largerNumber, smallerNumber] = numbers;
  }
  const allMultipliers = findAllMultipliers([], smallerNumber, largerNumber);
  return allMultipliers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

export {
  smallestCommons,
};
