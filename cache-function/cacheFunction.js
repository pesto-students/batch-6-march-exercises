function cacheFunction(cb) {
  const argsCalled = new Set();
  const cachedReturns = {};
  return function innerCache(arg) {
    if (!argsCalled.has(arg)) {
      argsCalled.add(arg);
      const result = cb(arg);
      cachedReturns[arg] = result;
      return result;
    }
    return cachedReturns[arg];
  };
}

export { cacheFunction };
