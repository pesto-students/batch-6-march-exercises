
function objectValues(obj) {
  const objKeys = Object.keys(obj);
  return objKeys.reduce((acc, key) => [...acc, obj[key]], []);
}

export {
  objectValues,
};
