
function sequentialPromise(promiseFunctions) {
  return promiseFunctions.reduce((acc, promiseFunc) => acc.then(promiseFunc), Promise.resolve());
}

export {
  sequentialPromise,
};
