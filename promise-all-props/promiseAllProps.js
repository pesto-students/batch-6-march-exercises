
function promiseAllProps(objWithPromise) {
  const result = {};
  Object.entries(objWithPromise).forEach(([key, value]) => {
    value.then((data) => {
      result[key] = data;
    });
  });
  return Promise.resolve(result);
}

export {
  promiseAllProps,
};
