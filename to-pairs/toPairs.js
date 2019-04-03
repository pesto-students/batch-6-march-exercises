
function toPairs(object) {
  const keys = Object.keys(object);
  return keys.map(key => [key, object[key]]);
}

export {
  toPairs,
};
