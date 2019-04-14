
function valuesIn(object) {
  const values = [];
  for(const key in object) {
    values.push(object[key]);
  }
  return values;
}

export {
  valuesIn,
};
