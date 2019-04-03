
var knownProp = new Proxy(receiver, {
  get: function(obj, prop) {
      return prop in obj ?
          obj[prop] :
          37;
  }
}


export {
  knownProp,
};
