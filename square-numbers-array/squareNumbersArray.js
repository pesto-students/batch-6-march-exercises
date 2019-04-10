
function squareNumbersArray(...arr) {
  const allNumbers = arr.every(Number);
  if (allNumbers === false) {
    throw new Error('My custom error');
  }
}

export {
  squareNumbersArray,
};
