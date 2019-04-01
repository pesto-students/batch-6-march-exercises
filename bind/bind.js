
function bind(func, valueOfThis, ...rest) {
  const newFunction = (...remainingParams) => {
    if (valueOfThis) {
      return func.prototype.bind(valueOfThis, ...rest, ...remainingParams);
    }
    return func(...rest, ...remainingParams);
  };

  return newFunction;
}

export {
  bind,
};
