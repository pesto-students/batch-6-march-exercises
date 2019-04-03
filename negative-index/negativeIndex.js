
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const getPositiveIndex = (arr, index) => (index < 0 ? arr.length + parseInt(index, 10) : index);
  const handler = {
    get: (targetArray, key) => {
      const positiveIndex = getPositiveIndex(targetArray, key);
      return targetArray[positiveIndex];
    },
    set: (targetArray, key, value) => {
      const positiveIndex = getPositiveIndex(targetArray, key);
      return Reflect.set(targetArray, positiveIndex, value);
    },
  };
  return new Proxy(array, handler);
}

export {
  negativeIndex,
};
