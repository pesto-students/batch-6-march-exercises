function lowercaseKeys(obj) {
  var keySet = Object.keys(obj);
  return keySet.reduce(function(partiallyConvertedObj, key) {
    var lowercaseKey = key.toLowerCase();
    partiallyConvertedObj[lowercaseKey] = obj[key];
    return partiallyConvertedObj;
  }, {});
}

export { lowercaseKeys };
