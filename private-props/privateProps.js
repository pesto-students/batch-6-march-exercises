
function privateProps(obj, privacyFilter) {
  const isPrivateProp = prop => typeof prop === 'string' && privacyFilter(prop);
  const handler = {
    get(target, prop) {
      if (isPrivateProp(prop)) {
        throw new TypeError(/Can't get property "${prop}"/);
      } else {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop) {
      if (isPrivateProp(prop)) {
        throw new TypeError(/Can't set property "${prop}"/);
      } else {
        return Reflect.set(target, prop);
      }
    },
    has(target, prop) {
      return !isPrivateProp(prop);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !privacyFilter(key));
    },
  };

  return new Proxy(obj, handler);
}

export {
  privateProps,
};
