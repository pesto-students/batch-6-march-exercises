
function mapObject(unmappedObject, callback) {
  const allKeys = Object.keys(unmappedObject);
  return allKeys.reduce((mappedObject, currentObjectKey) => {
    // eslint-disable-next-line no-param-reassign
    mappedObject[currentObjectKey] = callback(unmappedObject[currentObjectKey]);
    return mappedObject;
  }, {});
}

export {
  mapObject,
};
