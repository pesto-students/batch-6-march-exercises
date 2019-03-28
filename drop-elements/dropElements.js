
function dropElements(...args) {
  var array = args[0];
  var callbackFunction = args[1];
  return array.filter(callbackFunction);
}

export {
  dropElements,
};
