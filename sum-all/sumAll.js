/* eslint-disable prefer-const */
function sumAll([firstNumber, secondNumber]) {
  let sum = 0;

  // prettier-ignore
  let [min, max] = firstNumber < secondNumber
    ? [firstNumber, secondNumber]
    : [secondNumber, firstNumber];

  while (min <= max) {
    sum += min;
    min += 1;
  }
  return sum;
}

export { sumAll };
