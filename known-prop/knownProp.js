
const knownProp = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
        if(!target[propKey]){
          throw new TypeError("Unknown property");
        }
        return target[propKey];
    }
  })
}


export {
  knownProp,
};
