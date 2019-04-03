
const fibonacciIter = {
  [Symbol.iterator]() {
    let previous = 0;
    let current = 1;
    return {
      next() {
        const currentValue = previous + current;
        previous = current;
        current = currentValue;
        return {
          value: currentValue,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
