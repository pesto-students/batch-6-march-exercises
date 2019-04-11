
function promiseAllProps(promiseObject) {
  const keys = Object.keys(promiseObject);
  const allPromises = [];
  for (const key of keys) {
    allPromises.push(promiseObject[key]);
  }
  return Promise.all(allPromises)
    .then(results => results.reduce((acc, result, currentIndex) => (
      { ...acc, [keys[currentIndex]]: result }
    ), {}));
}

export {
  promiseAllProps,
};
