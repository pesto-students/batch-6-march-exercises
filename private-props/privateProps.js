
function privateProps(obj, _privacyFilter) {
  const isPrivateProp = prop => typeof prop === 'string' && _privacyFilter(prop);
  let privateConstraint = true;
  const handler = {
    get(target, prop) {
      if (prop === 'getPrivate') {
        privateConstraint = false;
        return Reflect.get(target, prop);
      }
      if (isPrivateProp(prop) && privateConstraint === true) {
        throw new TypeError(`Can't get property ${prop}`);
      }
      privateConstraint = true;
      return Reflect.get(target, prop);
    },
    set(target, prop) {
      if (isPrivateProp(prop)) {
        throw new TypeError(/Can't set property "${prop}"/);
      }
      return Reflect.set(target, prop);
    },
    has(target, prop) {
      if (isPrivateProp(prop)) {
        return false;
      }
      return Reflect.has(target, prop);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !_privacyFilter(key));
    },
  };

  return new Proxy(obj, handler);
}

export {
  privateProps,
};
