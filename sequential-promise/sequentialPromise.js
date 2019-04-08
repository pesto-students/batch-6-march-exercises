
function sequentialPromise(array) {
  return array.reduce((acc, el) => {
    let newVal = acc;
    if (!newVal) {
      newVal = el();
      return newVal;
    }
    newVal = acc.then(el);
    return newVal;
  }, null);
}

export {
  sequentialPromise,
};
