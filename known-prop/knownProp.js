function knownProp(obj) {
  const handler = {
    get(target, property) {
      if (Object.prototype.hasOwnProperty.call(target, property)) {
        return Reflect.get(target, property);
      }
      throw TypeError('Unknown property');
    },
  };
  return new Proxy(obj, handler);
}
// console.log(knownProp({ foo: true }));
export { knownProp };
