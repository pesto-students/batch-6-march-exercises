/* eslint-disable no-param-reassign */

function onChange(obj, callbackFn) {
  const handler = {
    set(target, index, value) {
      target[index] = value;
      callbackFn();
      return true;
    },
  };
  return new Proxy(obj, handler);
}

export {
  onChange,
};
