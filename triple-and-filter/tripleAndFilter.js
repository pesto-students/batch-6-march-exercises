
const multiplyBy3 = n => n * 3;
const divisibleBy5 = n => n % 5 === 0;
function tripleAndFilter(array) {
  const tripleNumbers = array.map(multiplyBy3);
  return tripleNumbers.filter(divisibleBy5);
}

export {
  tripleAndFilter,
};
