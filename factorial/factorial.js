const memoize = (fn) => {
  const cache = {};
  return (number) => {
    if (Object.hasOwnProperty.call(cache, number)) {
      return cache[number];
    }
    cache[number] = fn(number);
    return cache[number];
  };
};

const factorial = memoize((x) => {
  if (x === 1 || x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
});

export { factorial };
