/* eslint-disable no-param-reassign */
// eslint-disable-next-line consistent-return
function leastCommonMultiple(numOne, numTwo) {
  if (numOne === 0 || numTwo === 0) {
    return 0;
  }

  const isNegative = num => Math.sign(num) === -1;
  const convertToPositive = num => num * -1;

  numOne = isNegative(numOne) ? convertToPositive(numOne) : numOne;
  numTwo = isNegative(numTwo) ? convertToPositive(numTwo) : numTwo;

  const [greaterNumber, smallerNumber] = numOne > numTwo ? [numOne, numTwo] : [numTwo, numOne];
  if (greaterNumber % smallerNumber === 0) {
    return greaterNumber;
  }
  let i = 1;
  while (i <= greaterNumber) {
    if ((smallerNumber * i) % greaterNumber === 0) {
      return smallerNumber * i;
    }
    i += 1;
  }
}

export { leastCommonMultiple };
