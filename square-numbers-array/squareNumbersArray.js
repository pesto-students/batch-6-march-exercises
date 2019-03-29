import { isNumber } from 'util';

function squareNumbersArray(...array) {
  if (array.every(isNumber)) {
    array.map(el => el ** 2);
  } else {
    throw new Error('My custom error');
  }
}

export { squareNumbersArray };
