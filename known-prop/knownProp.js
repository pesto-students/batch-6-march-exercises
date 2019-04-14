
function knownProp(object) {
  const handler = {
    get(target, key) {
      if (!target.hasOwnProperty(key)) { // eslint-disable-line no-prototype-builtins
        throw new TypeError(`Unknown property ${key}`);
      }
      return Reflect.get(target, key);
    },
  };
  return new Proxy(object, handler);
}

export {
  knownProp,
};
