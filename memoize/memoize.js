
function memoize(callback) {
  const cachedResults = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if (!cachedResults.has(key)) {
      cachedResults.set(key, callback(...args));
    }
    return cachedResults.get(key);
  };
}

export {
  memoize,
};
