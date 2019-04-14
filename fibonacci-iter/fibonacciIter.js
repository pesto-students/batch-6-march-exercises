const fibonacciIter = {
  previousFib: 0,
  currentFib: 1,
  [Symbol.iterator]() {
    this.previousFib = 0;
    this.currentFib = 1;
    return this;
  },
  next() {
    const obj = { value: this.previousFib + this.currentFib, done: false };
    [this.previousFib, this.currentFib] = [this.currentFib, this.previousFib + this.currentFib];
    return obj;
  },
};

export { fibonacciIter };
