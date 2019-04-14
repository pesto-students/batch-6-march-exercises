
// eslint-disable-next-line no-restricted-globals
const isNumber = n => !isNaN(n);
function rangeIter(lowerBound, upperBound) {
  if (!isNumber(lowerBound)) {
    throw new TypeError(`${lowerBound} is not a number`);
  }

  if (!isNumber(upperBound)) {
    throw new TypeError(`${upperBound} is not a number`);
  }

  let prevValue = lowerBound;
  return {
    [Symbol.iterator]() {
      prevValue = lowerBound;
      return this;
    },
    next() {
      if (prevValue > upperBound) {
        return {
          done: true,
        };
      }
      const val = prevValue;
      prevValue += 1;
      return {
        value: val,
        done: false,
      };
    },
  };
}

export {
  rangeIter,
};
