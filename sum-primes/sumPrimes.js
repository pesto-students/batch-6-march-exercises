function isPrime(number) {
  let isNumberPrime = true;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      isNumberPrime = false;
      break;
    }
  }
  return isNumberPrime;
}

function sumPrimes(number) {
  if (number < 2) {
    return number;
  }
  let sum = 0;
  for (let pointer = 2; pointer <= number; pointer += 1) {
    if (isPrime(pointer)) {
      sum += pointer;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
