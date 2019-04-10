
function allOfConditions(...callbacks) {
  let skip = false;
  // eslint-disable-next-line array-callback-return
  return (...args) => callbacks.map((cb) => {
    if (!skip) {
      const res = cb(...args);
      if (res === false) {
        skip = true;
      }
    }
  });
}

export {
  allOfConditions,
};
