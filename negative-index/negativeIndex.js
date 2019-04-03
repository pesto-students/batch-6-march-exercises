
function negativeIndex(array) {
  const handler = {
    get: (target, property) => target[target.length + property],
  };
  const proxy = new Proxy(array, handler);
  return proxy;
}

export {
  negativeIndex,
};
