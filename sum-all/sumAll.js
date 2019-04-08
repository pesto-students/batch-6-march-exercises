const sumNumber = number => number * (number + 1) / 2;

function sumAll(...args) {
  const numbers = args[0];
  numbers.sort((a, b) => a - b);
  const [lowerBound, upperBound] = numbers;
  const sumLowerBound = sumNumber(lowerBound - 1);
  const sumUpperBound = sumNumber(upperBound);

  return sumUpperBound - sumLowerBound;
}

export {
  sumAll,
};
