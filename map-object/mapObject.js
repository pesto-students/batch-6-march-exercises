
function mapObject(obj, mapper) {
  const objectsKeys = Object.keys(obj);
  return objectsKeys.reduce((acc, key) => {
    acc[key] = mapper(obj[key]);
    return acc;
  }, {});
}

export {
  mapObject,
};
