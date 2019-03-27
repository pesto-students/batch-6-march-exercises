function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let result = 1;
  let initialNumber = 1;
  while (initialNumber <= number) {
    result *= initialNumber;
    initialNumber += 1;
  }
  return result;
}

export { factorial };
