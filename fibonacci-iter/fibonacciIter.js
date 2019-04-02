
const fibonacciIter = {
  firstNumber: 0,
  secondNumber: 1,
  [Symbol.iterator]() {
    return {
      next: () => {
        const fibonacciNumber = this.firstNumber + this.secondNumber;
        this.firstNumber = this.secondNumber;
        this.secondNumber = fibonacciNumber;
        return { value: fibonacciNumber, done: false };
      },
    };
  },
};

export {
  fibonacciIter,
};
