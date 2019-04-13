function limitFunctionCallCount(cb, callLimit) {
  let timesCalled = 0;
  return function innerLimitingFunctoin(...args) {
    if (timesCalled >= callLimit) return null;
    timesCalled += 1;
    return cb(...args);
  };
}

export { limitFunctionCallCount };
