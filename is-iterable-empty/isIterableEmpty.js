
function isIterableEmpty(iterableObj) {
  const iterator = iterableObj[Symbol.iterator]();
  return iterator.next().done;
}

export {
  isIterableEmpty,
};
