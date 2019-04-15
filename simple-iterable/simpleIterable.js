function simpleIterable() {
  let index = 0;
  const arr = [1, 2, 3, 4, 5];
  const iterable = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < arr.length) {
        // eslint-disable-next-line no-plusplus
        return { value: arr[index++], done: false };
      }
      return { value: undefined, done: true };
    },
  };
  return iterable;
}

export { simpleIterable };
