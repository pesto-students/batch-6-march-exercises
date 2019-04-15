/* eslint-disable no-param-reassign */

function onChange(obj, callbackFn) {
  const handler = {
    get(target, property) {
      const value = Reflect.get(target, property);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      if (!Object.is(target[property], value)) {
        callbackFn();
      }
      return Reflect.set(target, property, value);
    },
    defineProperty(target, property, descriptor) {
      if (!Object.is(target[property], descriptor.value)) {
        callbackFn();
      }
      return Reflect.defineProperty(target, property, descriptor);
    },
    deleteProperty(target, prop) {
      callbackFn();
      return Reflect.deleteProperty(target, prop);
    },
  };
  return new Proxy(obj, handler);
}

export { onChange };
