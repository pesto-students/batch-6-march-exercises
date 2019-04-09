
function largeOfFour(numberMatrix) {
  return numberMatrix.reduce((acc, array) => [...acc, Math.max(...array)], []);
}

export {
  largeOfFour,
};
