
function objectDefaults(...args) {
  var obj = args[0];
  var defaultObj = args[1];
  return Object.assign(defaultObj, obj);
}

export {
  objectDefaults,
};
