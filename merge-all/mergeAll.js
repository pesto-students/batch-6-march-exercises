
function mergeAll(array) {
  const objectsArray = array.filter(item => typeof item === 'object');
  return objectsArray.reduce((acc, elm) => Object.assign(acc, elm), {});
}

export {
  mergeAll,
};
