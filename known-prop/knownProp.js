
function knownProp(obj) {
  const keyExists = (object, key) => key in object;
  const handler = {
    get: (target, key) => {
      if (!keyExists(target, key)) {
        throw new TypeError('Unknown property');
      }
      return target[key];
    },
  };

  return new Proxy(obj, handler);
}

export {
  knownProp,
};
