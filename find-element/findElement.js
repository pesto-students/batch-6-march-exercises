
function findElement(...args) {
  var array = args[0];
  var callbackFunction = args[1];
  var filteredArray = array.filter(callbackFunction);
  return filteredArray[0];
}

export {
  findElement,
};
