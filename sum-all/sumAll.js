function sumAll([firstNumber, secondNumber]) {
  let min;
  let max;
  let sum = 0;
  if (firstNumber > secondNumber) {
    min = secondNumber;
    max = firstNumber;
  } else {
    min = firstNumber;
    max = secondNumber;
  }
  while (min <= max) {
    sum += min;
    min += 1;
  }
  return sum;
}

export { sumAll };
