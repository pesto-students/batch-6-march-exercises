
function modifyObjectKeys(object, callback) {
  const keys = Object.keys(object);
  const newObj = {};
  for (const key of keys) {
    const newKey = callback(key);
    const descriptors = Object.getOwnPropertyDescriptor(object, key);
    Object.defineProperty(newObj, newKey, descriptors);
  }
  return newObj;
}

export {
  modifyObjectKeys,
};
