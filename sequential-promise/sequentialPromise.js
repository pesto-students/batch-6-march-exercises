
function sequentialPromise(promises) {
  return promises.reduce((currP, nextP) => currP.then(res => nextP(res)), Promise.resolve(1));
}

export {
  sequentialPromise,
};
