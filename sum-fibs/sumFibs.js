
function sumFibs(number) {
  var fibonacciSeries = [1, 1];
  var currentIndex = 2;

  var nextNumber = fibonacciSeries[currentIndex - 1] + fibonacciSeries[currentIndex - 2];
  while(nextNumber <= number ) {
    fibonacciSeries[currentIndex] = nextNumber;
    currentIndex++;
    nextNumber = fibonacciSeries[currentIndex - 1] + fibonacciSeries[currentIndex - 2];
  } ;

  return fibonacciSeries.reduce(function(sum, currentValue){
    if (currentValue % 2 == 1){
      sum = sum + currentValue;
    }
    return sum;
  }, 0);
}

export {
  sumFibs,
};
