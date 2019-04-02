
function isIterable(obj) {
  const isObjIterable = typeof obj[Symbol.iterator] === 'function';
  return isObjIterable;
}

export {
  isIterable,
};
