
function knownProp(object) {
  const handler = {
    get(target, key) {
      const keys = Object.keys(target);
      if (keys.indexOf(key) === -1) {
        throw new TypeError(/Unknown property/);
      }
      return target[key];
    },
  };
  const proxy = new Proxy(object, handler);
  return proxy;
}

export {
  knownProp,
};
