/* eslint-disable guard-for-in */
function valuesIn(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(obj[key]);
  }
  return keys;
}

export { valuesIn };
