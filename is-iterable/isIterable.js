
function isIterable(iterable) {
  return typeof iterable[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
