
function sumAll(...args) {
  var firstNumber = args[0][0];
  var secondNumber = args[0][1];
  var bigNumber;
  var smallNumber;
  if (firstNumber > secondNumber) {
    bigNumber = firstNumber;
    smallNumber = secondNumber;
  }
  else {
    bigNumber = secondNumber;
    smallNumber = firstNumber;
  }
  var sum = 0;
  for (var i = smallNumber; i <= bigNumber; i++)
    sum = sum + i;

  return sum;
}

export {
  sumAll,
};
