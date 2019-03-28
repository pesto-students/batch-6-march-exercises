
function objectInvert(...args) {
  var obj = args[0];
  var objectKeys = Object.keys(obj);
  var invertedObj = objectKeys.reduce(function(accumulator, currentValue){
    accumulator[ obj[currentValue] ] = currentValue;
  }, {});
  return invertedObj;
}

export {
  objectInvert,
};

objectInvert({
  x: 'hi',
  y: 'sup',
  z: 'yo',
});