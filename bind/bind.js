function bind(fn, thisArg, ...args) {
  if (args.length > 0) {
    return fn.bind(thisArg, ...args);
  }
  return fn.bind(thisArg);
}

export { bind };
