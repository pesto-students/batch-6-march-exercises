
const isOdd = x => x % 2 === 1;
function doubleOddNumbers(array) {
  const oddNumbers = array.filter(isOdd);
  return oddNumbers.map(val => val * 2);
}

export {
  doubleOddNumbers,
};
