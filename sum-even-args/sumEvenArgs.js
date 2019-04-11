
const isEven = x => x % 2 === 0;
const sum = (a, b) => a + b;
function sumEvenArgs(...args) {
  const evenNumbers = args.filter(isEven);
  return evenNumbers.reduce(sum, 0);
}

export {
  sumEvenArgs,
};
