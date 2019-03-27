

function sumOfPerfectSquares(number) {
  if (number <= 3) { // Base case 0, 1, 2, 3
    return number;
  }
  let res = number; // worst case
  const maxIter = Math.floor(Math.sqrt(number));
  for (let i = 1; i <= maxIter; i += 1) {
    const sqr = i * i;
    res = Math.min(res, 1 + sumOfPerfectSquares(number - sqr));
  }
  return res;
}

export {
  sumOfPerfectSquares,
};
