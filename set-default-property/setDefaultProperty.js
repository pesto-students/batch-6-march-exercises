
function setDefaultProperty(obj) {
  const handler = {
    get(target, name) {
      if (name in target) {
        return target[name];
      }
      return 'defaultValue';
    },
  };

  const p = new Proxy(obj, handler);
  return p;
}

export {
  setDefaultProperty,
};
