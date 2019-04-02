
function Cycled(...array) {
  const getNextIndex = index => (index) % array.length;
  return {
    [Symbol.iterator]() {
      let index = array.length - 1;
      return {
        next() {
          index += 1;
          return array[getNextIndex(index)];
        },
        current() {
          return array[getNextIndex(index + 1)];
        },

        previous() {
          return array[index];
        },
      };
    },
  };
}

export {
  Cycled,
};
