
const fibonacciIter = {
  previous: 0,
  current: 1,
  [Symbol.iterator]() {
    this.previous = 0;
    this.current = 1;
    return this;
  },
  next() {
    const next = this.previous + this.current;
    this.previous = this.current;
    this.current = next;
    return { value: next, done: false };
  },
};

export {
  fibonacciIter,
};
