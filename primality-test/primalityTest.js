function primalityTest(number) {
  const isNegativeOrZero = num => Math.sign(num) === -1 || num === 0;
  if (isNegativeOrZero(number)) {
    return false;
  }
  if (number === 1) {
    return false;
  }
  const sqrtOfNumber = Math.floor(Math.sqrt(number));
  const numbersTillSqrtOfNumber = Array.from({ length: sqrtOfNumber }, (_, i) => i + 2);

  for (const num of numbersTillSqrtOfNumber) {
    if (num !== number && number % num === 0) {
      return false;
    }
  }
  return true;
}

export { primalityTest };
