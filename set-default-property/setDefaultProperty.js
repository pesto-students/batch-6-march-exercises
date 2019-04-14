
function setDefaultProperty(target, defaultValue) {
  const handler = {
    get(object, key) {
      return key in object ? object[key] : defaultValue;
    },
  };
  return new Proxy(target, handler);
}

export {
  setDefaultProperty,
};
