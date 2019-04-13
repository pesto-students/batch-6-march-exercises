/* eslint-disable no-param-reassign */
function getPrefectSquaresTillNum(num) {
  const squares = [];
  while (num > 0) {
    if (Math.floor(Math.sqrt(num)) ** 2 === num) {
      squares.push(num);
    }
    num -= 1;
  }
  return squares.reverse();
}
// 0 1 2 3 4 5 6
// 0 1 2 3 4 5 6 // 1
// 0 1 1 2 2 3 3 // 2
// 0 1 1 2 1 2 2 // 3
function sumOfPerfectSquares(number) {
  const squares = getPrefectSquaresTillNum(number);

  // base case we need all 1's to make up square.
  const numOfSquares = [...Array(number + 1)].fill(number);
  numOfSquares[0] = 0;
  const allNumsTillNumber = [...Array(number + 1)].map((_, i) => i);

  for (const square of squares) {
    for (const num of allNumsTillNumber) {
      if (square <= num) {
        numOfSquares[num] = Math.min(numOfSquares[num], 1 + numOfSquares[num - square]);
      }
    }
  }
  return numOfSquares[number];
}

export { sumOfPerfectSquares };
