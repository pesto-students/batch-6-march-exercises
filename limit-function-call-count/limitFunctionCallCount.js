
function limitFunctionCallCount(cb, callCount) {
  let counter = 0;

  return function retF(...args) {
    if (counter >= callCount) {
      return null;
    }
    counter += 1;
    return cb(...args);
  };
}

export {
  limitFunctionCallCount,
};
