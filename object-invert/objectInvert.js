
function objectInvert(objectToInvert) {
  const objEntries = Object.entries(objectToInvert);
  return objEntries.reduce((acc, current) => ({ ...acc, [current[1]]: current[0] }), {});
}

export {
  objectInvert,
};
