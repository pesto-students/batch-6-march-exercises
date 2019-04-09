
function factorial(factOfNum) {
  if (factOfNum === 0 || factOfNum === 1) {
    return 1;
  }
  return factOfNum * factorial(factOfNum - 1);
}

export {
  factorial,
};
