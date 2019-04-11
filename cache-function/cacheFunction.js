function cacheFunction(cb) {
  const cachedResults = {};
  return function retF(...args) {
    if (Object.hasOwnProperty.call(cachedResults, args.join(''))) {
      return cachedResults[args.join('')];
    }
    const value = cb(...args);
    cachedResults[args.join('')] = value;
    return value;
  };
}

export {
  cacheFunction,
};
