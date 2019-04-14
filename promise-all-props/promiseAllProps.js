/* eslint-disable no-param-reassign */
function promiseAllProps(obj) {
  const keys = Object.keys(obj);
  const newObj = {};
  for (const key of keys) {
    obj[key].then((result) => {
      newObj[key] = result;
    });
  }
  return Promise.resolve(newObj);
}

export { promiseAllProps };
