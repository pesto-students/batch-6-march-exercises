import { isNumber } from "util"; 

function squareNumbersArray(...args) {
  var numbers = args;
  numbers.map( function ( number ) {
    if (!isNumber(number))
      throw('My custom error');
    else
      return number * number;
  })
  return numbers;
}

export {
  squareNumbersArray,
};
