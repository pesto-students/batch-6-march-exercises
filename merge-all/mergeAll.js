
function mergeAll(objects) {
  return objects.reduce((acc, object) => ({ ...acc, ...object }));
}

export {
  mergeAll,
};
