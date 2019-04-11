function sequentialPromise(promises) {
  return promises.reduce((acc, promiseFn) => acc.then(promiseFn), Promise.resolve());
}

export { sequentialPromise };
