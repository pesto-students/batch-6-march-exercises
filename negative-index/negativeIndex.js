function negativeIndex(array) {
  const handler = {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      const newArr = target;
      newArr[key] = value;
      return newArr;
    },
  };
  const proxy = new Proxy(array, handler);
  return proxy;
}

export {
  negativeIndex,
};
