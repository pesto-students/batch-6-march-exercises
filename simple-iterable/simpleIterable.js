
function simpleIterable() {
  let counter = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (counter >= 5) {
            return {
              value: undefined,
              done: true,
            };
          }
          counter += 1;
          return {
            value: counter,
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
