function knownProp(obj) {
  const handler = {
    get(target, name) {
      if (name in target) {
        return target[name];
      }
      throw new TypeError('Unknown property');
    },
  };

  const p = new Proxy(obj, handler);
  return p;
}
// console.log(knownProp({ foo: true }));
export { knownProp };
