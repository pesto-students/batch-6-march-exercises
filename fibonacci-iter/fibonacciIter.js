
const fibonacciIter = {
  previousN: 1,
  currentN: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const newNumber = this.previousN + this.currentN;
    this.previousN = this.currentN;
    this.currentN = newNumber;
    return {
      value: newNumber,
      done: false,
    };
  },
};

export {
  fibonacciIter,
};
