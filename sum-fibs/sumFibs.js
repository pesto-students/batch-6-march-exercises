
function sumFibs(number, prev = 0, current = 1, sum = 1) {
  const prevVal = current;
  const currentVal = prev + current;
  if (currentVal > number) {
    return sum;
  }
  if (currentVal % 2 !== 0) {
    const newSum = sum + currentVal;
    return sumFibs(number, prevVal, currentVal, newSum);
  }
  return sumFibs(number, prevVal, currentVal, sum);
}

export {
  sumFibs,
};
