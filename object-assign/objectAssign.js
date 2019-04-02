
function objectAssign(obj1, ...obj2) {
  var newObj = Object.assign(obj1, ...obj2);
  return newObj;
}

export {
  objectAssign,
};
