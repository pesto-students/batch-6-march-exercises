
function onChange(object, callback) {
  const handler = {
    get(target, prop) {
      const val = Reflect.get(target, prop);
      if (typeof val === 'object') {
        return new Proxy(val, handler);
      }
      return val;
    },
    set(target, prop, value) {
      const prevValue = target[prop];
      if (!Object.is(prevValue, value)) {
        callback();
      }
      return Reflect.set(target, prop, value);
    },
    defineProperty(target, key, descriptor) {
      callback();
      return Reflect.defineProperty(target, key, descriptor);
    },
    deleteProperty(target, prop) {
      callback();
      return Reflect.deleteProperty(target, prop);
    },
  };

  return new Proxy(object, handler);
}

export {
  onChange,
};
