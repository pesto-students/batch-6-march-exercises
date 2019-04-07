
const curry = (fn, initParams = []) => (...args) => {
  const curried = (params) => {
    if (params.length === fn.length) {
      return fn(...params);
    }
    return curry(fn, params);
  };
  return curried([...initParams, ...args]);
};

export {
  curry,
};
