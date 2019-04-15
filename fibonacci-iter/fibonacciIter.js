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

// function* fiboGenerator(n, current = 0, next = 1) {
//   if (n === 0) {
//     return 0;
//   }
//   yield current;
//   yield* fiboGenerator(n - 1, next, next + current);
// }

// const [...fib10] = fiboGenerator(10);
// console.log(fib10);

export { fibonacciIter };
