
function reject(fn, array) {
  return array.filter(item => !fn(item));
}

export {
  reject,
};
