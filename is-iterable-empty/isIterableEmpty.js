
function isIterableEmpty(arg) {
  if (typeof arg[Symbol.iterator] === 'undefined') {
    return true;
  }

  const iterator = arg[Symbol.iterator]();
  if (typeof iterator.next !== 'function') {
    return true;
  }

  const nextObject = iterator.next();
  if (typeof nextObject.done === 'undefined' || nextObject.done === true) {
    return true;
  }

  return false;
}

export {
  isIterableEmpty,
};
