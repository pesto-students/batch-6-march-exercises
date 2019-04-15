
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const getPositiveIndex = (arr, index) => (index < 0 ? arr.length + parseInt(index, 10) : index);
  const isString = str => typeof str === 'string';
  const handler = {
    get: (targetArray, key) => {
      let newKey = key;
      if (isString(key)) {
        const intKey = parseInt(key, 10);
        newKey = typeof key === 'string' && Number.isInteger(intKey) ? getPositiveIndex(targetArray, intKey) : key;
      }
      return Reflect.get(targetArray, newKey);
    },
    set: (targetArray, key, value) => {
      let newKey = key;
      if (isString(key)) {
        const intKey = parseInt(key, 10);
        newKey = typeof key === 'string' && Number.isInteger(intKey) ? getPositiveIndex(targetArray, intKey) : key;
      }
      return Reflect.set(targetArray, newKey, value);
    },
  };
  return new Proxy(array, handler);
}

export {
  negativeIndex,
};
