function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < 5) {
            counter += 1;
            return {
              value: counter,
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}


export {
  simpleIterable,
};
