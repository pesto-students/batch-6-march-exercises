const isPositiveInteger = num => Number.isInteger(num) && num >= 0;
const isNegativeInteger = num => Number.isInteger(num) && num < 0;

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const handler = {
    get(target, prop) {
      const key = +prop;
      if (isPositiveInteger(key)) {
        return Reflect.get(target, key);
      }
      if (isNegativeInteger(key)) {
        return Reflect.get(target, target.length + key);
      }
      return Reflect.get(target, prop);
    },

    set(target, prop, value) {
      const key = +prop;
      if (isPositiveInteger(key)) {
        return Reflect.set(target, key, value);
      }
      if (isNegativeInteger(key)) {
        return Reflect.set(target, target.length + key, value);
      }
      return Reflect.set(target, prop, value);
    },
  };
  return new Proxy(array, handler);
}

export {
  negativeIndex,
};
