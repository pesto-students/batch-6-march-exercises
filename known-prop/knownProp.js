
function knownProp(object) {
  const handler = {
    get(target, key) {
      if (!(key in target)) {
        throw new TypeError(`Unknown property ${key}`);
      }
      return target[key];
    },
  };
  return new Proxy(object, handler);
}

export {
  knownProp,
};
