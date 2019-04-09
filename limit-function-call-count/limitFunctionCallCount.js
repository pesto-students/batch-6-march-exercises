
function limitFunctionCallCount(callback, limit) {
  let timesCalled = 0;
  function callbackCaller(...callbackArguments) {
    if (timesCalled >= limit) {
      return null;
    }
    timesCalled += 1;
    return callback(...callbackArguments);
  }

  return callbackCaller;
}

export {
  limitFunctionCallCount,
};
