function isPrime(number) {
  let initialValue = 2;
  while (initialValue < Math.sqrt(number) + 1) {
    if (number % initialValue === 0) {
      return false;
    }
    initialValue += 1;
  }
  return true;
}
function sumPrimes(number) {
  let sum = 2;
  let initialValue = 3;
  while (initialValue <= number) {
    sum += isPrime(initialValue) ? initialValue : 0;
    initialValue += 1;
  }
  return sum;
}

export { sumPrimes };
