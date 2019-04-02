function simpleIterable() {
  return {
    [Symbol.iterator]() {
      const value = 0;
      return {
        next() {
          if (value > 5) {
            return {
              value: undefined,
              done: false,
            };
          }
          return {
            value: value + 1,
            done: false,
          };
        },
      };
    },
  };
}


export {
  simpleIterable,
};
