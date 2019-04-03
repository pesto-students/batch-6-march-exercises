/* eslint-disable no-param-reassign */
function negativeIndex(array) {
  const handler = {
    get(target, index) {
      if (index < 0) {
        index = target.length - index;
      }
      return target[index];
    },
    // set(target, index, value) {

    // },
  };
  const proxy = new Proxy(array, handler);
  return proxy;
}

export {
  negativeIndex,
};
