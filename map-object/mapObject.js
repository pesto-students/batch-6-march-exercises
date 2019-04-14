function mapObject(obj, mapper) {
  if (!typeof mapper === 'function') {
    return mapper;
  }
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = mapper(obj[key]);
    return acc;
  }, {});
}

export { mapObject };
