
function primalityTest(num) {
  if (num < 2) { return false; }
  let isPrime = true;
  for (let i = 2; i < num; i += 1) {
    isPrime = num % i !== 0;
    if (!isPrime) return isPrime;
  }
  return isPrime;
}

export {
  primalityTest,
};
