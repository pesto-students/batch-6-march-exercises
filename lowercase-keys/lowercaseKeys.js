
function lowercaseKeys(objectWithMixedKeys) {
  const allKeys = Object.keys(objectWithMixedKeys);
  return allKeys.reduce((resultObject, key) => {
    Object.defineProperty(resultObject, key.toLowerCase(), {
      value: objectWithMixedKeys[key],
      enumerable: true,
    });
    return resultObject;
  }, {});
}

export {
  lowercaseKeys,
};
