
function simpleIterable() {
  let prevValue = 1;
  return {
    [Symbol.iterator]() {
      prevValue = 1;
      return this;
    },
    next() {
      if (prevValue > 5) {
        return {
          value: undefined,
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
  simpleIterable,
};
