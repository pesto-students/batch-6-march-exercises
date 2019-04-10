
function threeSum(array, number) {
  if (array.length === 0) {
    throw new Error('invalid input');
  }

  if (typeof number !== 'number') {
    throw new Error('second argument must be a number');
  }

  if (array.length < 3) {
    throw new Error('the array must contain atleast 3 elements ');
  }
  let sortedArr = array;
  sortedArr = sortedArr.sort();
  let sum = [];
  let found = false;

  for (let i = 0; i < sortedArr.length - 2; i += 1) {
    for (let j = i; j <= sortedArr.length - 1; j += 1) {
      for (let k = j; k < sortedArr.length; k += 1) {
        const newSum = sortedArr[i] + sortedArr[j] + sortedArr[j];
        if (newSum === number) {
          sum = [sortedArr[i], sortedArr[j], sortedArr[j]];
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    if (found) {
      break;
    }
  }
  if (found) {
    sum = sum.map(value => array[array.indexOf(value)]);
  }

  return sum;
}

export {
  threeSum,
};
