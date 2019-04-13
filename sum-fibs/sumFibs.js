function generateOddFibSeries(number) {
  const fibSeries = [];
  fibSeries[0] = 0;
  fibSeries[1] = 1;
  while (fibSeries[fibSeries.length - 1] <= number) {
    fibSeries[fibSeries.length] = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
  }
  if (fibSeries[fibSeries.length - 1] > number) {
    fibSeries.pop();
  }
  return fibSeries.filter(num => num % 2 === 1);
}

function sumFibs(number) {
  return generateOddFibSeries(number).reduce(
    (accumulator, nextElement) => accumulator + nextElement,
  );
}

export { sumFibs };
