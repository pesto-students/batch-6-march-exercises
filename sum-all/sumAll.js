
function sumAll(numbers) {
  const firstNumber = numbers[0];
  const secondNumber = numbers[1];
  let high;
  let low;
  if (firstNumber > secondNumber) {
    low = secondNumber;
    high = firstNumber;
  } else {
    low = firstNumber;
    high = secondNumber;
  }

  let sum = 0;
  for (let i = low; i <= high; i += 1) {
    sum += i;
  }

  return sum;
}

export {
  sumAll,
};
