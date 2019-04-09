
function largeOfFour(arrayOfNumberArrays) {
  const largeNumbers = [];
  arrayOfNumberArrays.forEach((array) => {
    largeNumbers.push(Math.max(...array));
  });
  return largeNumbers;
}


export {
  largeOfFour,
};
