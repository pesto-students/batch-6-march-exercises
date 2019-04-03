
function privateProps(myObj, privacyFilter) {
  const handler = {
    get(obj, prop) {
      return privacyFilter(prop) in obj
        ? false
        : obj[prop];
    },
    set(obj, prop, value) {
      return privacyFilter(prop) in obj
        ? false
        : Object.assign(obj[prop], value);
    },
  };
  return new Proxy(myObj, handler);
}

export {
  privateProps,
};
