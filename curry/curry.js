function curry(fn, ...args) {
  if (fn.length === args.length) {
    // all needed arguments received?
    return fn(...args);
  }
  // return a fn that takes the remaining args and returns curried fn
  return (...rest) => curry(fn, ...args, ...rest);
}
export { curry };
