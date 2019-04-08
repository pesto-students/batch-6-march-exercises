
function objectPairs(obj) {
  const objKeys = Object.keys(obj);
  return objKeys.reduce((acc, key) => [...acc, [key, obj[key]]], []);
}

export {
  objectPairs,
};
