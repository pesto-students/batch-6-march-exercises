
function bind(func, valueOfThis, ...rest) {
  return func.bind(valueOfThis, ...rest);
}

export {
  bind,
};
