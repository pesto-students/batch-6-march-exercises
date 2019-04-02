
function objectAssign(...objects) {
  return objects.reduce((res, obj) => Object.assign(res, obj));
}

export {
  objectAssign,
};
