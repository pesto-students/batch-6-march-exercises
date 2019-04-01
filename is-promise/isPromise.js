
function isPromise(promise) {
  const isNotPromise = !(promise instanceof Promise);
  if (isNotPromise) {
    return false;
  }
  return true;
}

export {
  isPromise,
};
