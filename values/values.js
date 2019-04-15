
function values(object) {
  const keys = Object.keys(object);
  const vals = [];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      vals.push(object[key]);
    }
  }
  return vals;
}

export {
  values,
};
