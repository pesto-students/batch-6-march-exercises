
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
  let current = start - 1;
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      current += 1;
      if (current <= end) {
        return { value: current, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

export {
  rangeIter,
};
