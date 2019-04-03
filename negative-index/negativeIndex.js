
function negativeIndex(array1) {
  if (!Array.isArray(array1)) {
    throw new TypeError('Only arrays are supported');
  }

  const getPositiveIndex = (arrLen, idx) => Number(arrLen) + Number(idx);

  const handler = {
    get(target, index) {
      if (index < 0) {
        return target[getPositiveIndex(target.length, index)];
      }
      return target[index];
    },
    set(target, index, value) {
      let targetindex = index;
      if (index < 0) {
        targetindex = getPositiveIndex(target.length, index);
      }
      target[targetindex] = value;
      return true;
    },
  };
  return new Proxy(array1, handler);
}

export {
  negativeIndex,
};
