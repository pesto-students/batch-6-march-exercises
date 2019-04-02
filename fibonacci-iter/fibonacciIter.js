
const fibonacciIter = {
  [Symbol.iterator]() {
    const currentValue = 1;
    return {
      next() {
        return {
          value: currentValue + 1,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
