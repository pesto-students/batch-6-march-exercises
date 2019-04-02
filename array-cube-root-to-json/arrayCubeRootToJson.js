
function arrayCubeRootToJson(arr) {
  const { isArray } = Array;
  if (!isArray(arr)) {
    throw new Error('Not an Array');
  }
  const allNumbers = arr.every(Number);
  if (!allNumbers) {
    throw new Error('Not valid array');
  }
  return arr.reduce((res, el) => {
    res[el.toString()] = Math.cbrt(el);
    return res;
  }, {});
}

export {
  arrayCubeRootToJson,
};
