/* eslint-disable no-param-reassign */
function rangeIter(start, end) {
  if (typeof start !== 'number') {
    throw new TypeError(`${start} is not a number`);
  }
  if (typeof end !== 'number') {
    throw new TypeError(`${end} is not a number`);
  }

  if (start > end) {
    return [];
  }
  if (start === end) {
    return [start];
  }
  let current = start;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (current <= end) {
        const obj = { value: current, done: false };
        current += 1;
        return obj;
      }
      return { value: undefined, done: true };
    },
  };
}

export { rangeIter };
