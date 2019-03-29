
function memoize(callback) {
  var cache = {};
  return function (...args) {
    var argString = args.join('');
    if (cache.hasOwnProperty(argString)) {
      return cache[argString];
    } else {
      var result = callback(...args);
      cache[argString] = result;
      return result;
    }
  }
};


export {
  memoize,
};
