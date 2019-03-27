
function isPrime(number) {
  const numberRoot = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= numberRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(maxNumber) {
  let sum = 0;
  for (let i = 2; i <= maxNumber; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
