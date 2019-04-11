
function mergeAll(array) {
  const objects = array.filter(item => typeof item === 'object');
  return objects.reduce((acc, elm) => Object.assign(acc, elm), {});
}

export {
  mergeAll,
};
