
function sumEvenArgs(...args) {
  const isEven = number => number % 2 === 0;
  const numbers = [...args];

  return numbers.reduce((partialSum, currentValue) => {
    if (isEven(currentValue)) {
      return partialSum + currentValue;
    }
    return partialSum;
  }, 0);
}

export {
  sumEvenArgs,
};
