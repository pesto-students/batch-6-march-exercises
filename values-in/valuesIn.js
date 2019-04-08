
function valuesIn(object) {
  const keys = Object.getOwnPropertyNames(object);
  return keys.reduce((acc, key) => {
    acc.push(object[key]);
    return acc;
  }, []);
}

export {
  valuesIn,
};
