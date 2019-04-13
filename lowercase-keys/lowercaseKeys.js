function lowercaseKeys(obj) {
  const keys = Object.keys(obj);
  return keys.reduce((newObject, key) => {
    // eslint-disable-next-line no-param-reassign
    newObject[key.toLowerCase()] = obj[key];
    return newObject;
  }, {});
}

export { lowercaseKeys };
