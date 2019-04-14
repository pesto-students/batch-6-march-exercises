
function iterableProtocol() {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: '',
        done: true,
      };
    },
  };
}

export {
  iterableProtocol,
};
