
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get(target, prop) {
      if (!Object.prototype.hasOwnProperty.call(target, prop)) {
        return defaultValue;
      }
      return Reflect.get(target, prop);
    },
  };

  return new Proxy(object, handler);
}

export {
  setDefaultProperty,
};
