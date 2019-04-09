
function objectDefaults(originalObject, objectWithDefaults) {
  return { ...objectWithDefaults, ...originalObject };
}

export {
  objectDefaults,
};
