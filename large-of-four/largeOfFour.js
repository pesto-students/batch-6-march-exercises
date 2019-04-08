
function largeOfFour(arrays) {
  const getMax = Math.max;
  return arrays.reduce((res, arr) => [...res, getMax(...arr)], []);
}

export {
  largeOfFour,
};
