
function cacheFunction(cb) {
  var cache = {};
  return (parameter) => {
    if(parameter in cache){
      return cache[parameter];
    }
    var result = cb(parameter);
    cache[parameter] = result;

    return cache[parameter];
  };
}

export {
  cacheFunction,
};
