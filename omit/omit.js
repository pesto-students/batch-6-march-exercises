/* eslint-disable guard-for-in */

function omit(keysToOmit, obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  const filteredKeys = keys.filter(key => !keysToOmit.includes(key));
  return filteredKeys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
}


export {
  omit,
};
