const isDivisibleByFive = number => number % 5 === 0;

function tripleAndFilter(numbers) {
  const tripledResult = numbers.map(number => number * 3);
  return tripledResult.filter(number => isDivisibleByFive(number));
}

export {
  tripleAndFilter,
};
