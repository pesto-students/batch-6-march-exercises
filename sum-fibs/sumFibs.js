
function sumFibs(maxNumber) {
  let current = 1;
  let next = 1;
  let sum = current;
  while (next <= maxNumber) {
    sum += next % 2 === 0 ? 0 : next;
    const newNext = current + next;
    current = next;
    next = newNext;
  }
  return sum;
}

export {
  sumFibs,
};
