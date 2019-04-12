function mergeAll(objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }));
}

export { mergeAll };
