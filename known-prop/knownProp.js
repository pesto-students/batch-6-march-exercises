
const knownProp = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
        if(!target[propKey]){
          throw new TypeError("unknown type");
        }
        return target[propKey];
    }
  })
}


export {
  knownProp,
};
