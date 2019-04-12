
const fibonacciIter = {
  [Symbol.iterator]() {
    let current = 0;
    let next = 1;
    return {
      next() {
        const newNext = current + next;
        current = next;
        next = newNext;
        return {
          value: newNext,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
