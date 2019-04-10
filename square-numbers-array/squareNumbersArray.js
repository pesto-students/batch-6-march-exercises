
function squareNumbersArray(...numberArray) {
  const isNumber = number => typeof number === 'number';
  const hasAllNumbers = numberArray.every(isNumber);
  const isValidInput = Array.isArray(numberArray) && hasAllNumbers;
  if (!isValidInput) {
    throw new TypeError('My custom error');
  }
  return numberArray.map(number => number ** 2);
}

export {
  squareNumbersArray,
};
