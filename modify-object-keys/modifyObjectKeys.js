
function modifyObjectKeys(object, callback) {
  const keys = Object.keys(object);
  const keyObjPair = keys.map(key => [callback(key), object[key]]);
  return keyObjPair.reduce((acc, elm) => {
    const key = elm[0];
    const value = elm[1];
    acc[key] = value;
    return acc;
  }, {});
}

export {
  modifyObjectKeys,
};
