
const notArray = arr => !Array.isArray(arr);
const emptyArray = arr => arr.length === 0;
const notNumbers = arr => arr.some(isNaN);
function arrayAddition(array1, array2) {
  if (notArray(array1) || notArray(array2)) {
    throw new TypeError('Arguments are not arrays');
  }
  if (emptyArray(array1) || emptyArray(array2)) {
    throw new TypeError('Provided arrays are empty');
  }

  if (notNumbers(array1) || notNumbers(array2)) {
    throw new TypeError('Invalid arrays');
  }

  const biggerArray = array1.length >= array2.length ? array1 : array2;
  const smallerArray = array1.length < array2.length ? array1 : array2;
  return biggerArray.map((value, index) => {
    const valueToAdd = typeof smallerArray[index] !== 'undefined' ? smallerArray[index] : 0;
    return value + valueToAdd;
  });
}

export {
  arrayAddition,
};
