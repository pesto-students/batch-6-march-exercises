
function valuesIn(object) {
  const vals = [];
  // eslint-disable-next-line guard-for-in
  for (const val in object) {
    vals.push(object[val]);
  }
  return vals;
}

export {
  valuesIn,
};
