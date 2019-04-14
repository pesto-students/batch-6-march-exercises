
function tripleAndFilter(array) {
  const triples = array.map(el => el * 3);
  const divisible = divisor => divident => divident % divisor === 0;
  const divisibleByFive = divisible(5);
  return triples.filter(divisibleByFive);
}

export {
  tripleAndFilter,
};
