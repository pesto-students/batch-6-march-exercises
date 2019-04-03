
const knownProp = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
        if(target[propKey]){
          return target[propKey];
        }
        return undefined;
    }
  })
}


export {
  knownProp,
};
