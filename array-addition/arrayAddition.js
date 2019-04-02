function verifyAllNumbers(numbers) {
  for (const number of numbers) {
    if (typeof number !== 'number') {
      throw new TypeError('Array must contain only numbers');
    }
  }
}

function arrayAddition(firstArray, secondArray) {
  const isBothArray = Array.isArray(firstArray) && Array.isArray(secondArray);
  const isError = !isBothArray || firstArray.length < 1 || secondArray.length < 1;
  if (isError) {
    throw new TypeError('Both arguments should be of type Array.');
  }
  verifyAllNumbers(firstArray);
  verifyAllNumbers(secondArray);
  const result = firstArray.map((number, index) => {
    const secondNumber = secondArray[index] || 0;
    return number + secondNumber;
  });
  if (firstArray.length < secondArray.length) {
    return result.concat(secondArray.slice(firstArray.length));
  }
  return secondArray;
}

export {
  arrayAddition,
};
