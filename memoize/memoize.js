
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = args.join('');
    if (Object.prototype.hasOwnProperty.call(cache, key) === false) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

export {
  memoize,
};
