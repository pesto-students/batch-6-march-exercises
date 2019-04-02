
function arrayAddition(firstArray, secondArray) {
  if (firstArray.length === 0 || secondArray.length === 0
    || !Array.isArray(firstArray) || !(Array.isArray(secondArray))) {
    throw Error();
  }

  const [longerArray, shorterArray] = firstArray.length > secondArray.length
    ? [firstArray, secondArray]
    : [secondArray, firstArray];

  const addedArray = longerArray.map((number, index) => {
    if (!Number.isInteger(number)) {
      throw Error();
    }
    if (index <= shorterArray.length - 1) {
      return number + shorterArray[index];
    }
    return number;
  });
  return addedArray;
}

export {
  arrayAddition,
};
