
function lowercaseKeys(obj) {
  var keys = Object.keys(obj);
  return keys.reduce(function(acc, key){
    acc[key.toLowerCase()] = obj[key];
    return acc;
  },{});
}

export {
  lowercaseKeys,
};
