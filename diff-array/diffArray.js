
function diffArray(a, b) {
  const onlyA = a.filter(el => !b.includes(el));
  const onlyB = b.filter(el => !a.includes(el));
  return [...onlyA, ...onlyB];
}

export {
  diffArray,
};
