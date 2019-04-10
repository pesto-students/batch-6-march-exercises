
function sumPrimes(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    let isPrime = true;
    for (let j = 1; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0 && j !== 1) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && i > 1) {
      sum += i;
    }
  }
  return sum;
}


export {
  sumPrimes,
};
