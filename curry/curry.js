// curry(fn) => fn(...args) => fn(...args)

// add(1)(2)
function curry(cb, ...initialArguments) {
  if (cb.length === initialArguments.length) {
    return cb(...initialArguments);
  }
  return function curryIng(...args) {
    return curry(cb, ...initialArguments, ...args);
  };
}

export {
  curry,
};
