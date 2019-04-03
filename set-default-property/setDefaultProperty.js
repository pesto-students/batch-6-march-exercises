
function setDefaultProperty(myObj, defaultValue) {
  const handler = {
    get(obj, prop) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) { return obj[prop]; }
      return defaultValue;
    },
  };
  return new Proxy(myObj, handler);
}

export {
  setDefaultProperty,
};
