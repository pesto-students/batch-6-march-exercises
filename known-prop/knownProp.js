
function knownProp(myObj) {
  const handler = {
    get(obj, prop) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) { return obj[prop]; }
      throw TypeError(/Unknown property/);
    },
  };
  return new Proxy(myObj, handler);
}

export {
  knownProp,
};
