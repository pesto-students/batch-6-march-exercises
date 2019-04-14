function objectInvert(obj) {
  const keys = Object.keys(obj);
  return keys.reduce((reverseObject, key) => {
    // eslint-disable-next-line no-param-reassign
    reverseObject[obj[key]] = key;
    return reverseObject;
  }, {});
}

export { objectInvert };
