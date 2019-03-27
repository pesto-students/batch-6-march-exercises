
function cacheFunction(callback) {
  const seenArguments = [];

  function callbackCaller(callBackArgument) {
    const existingArgument = seenArguments
      .find(argumentObject => argumentObject.argument === callBackArgument);

    if (existingArgument) {
      return existingArgument.result;
    }

    const result = callback(callBackArgument);
    seenArguments.push({
      argument: callBackArgument,
      result,
    });

    return result;
  }

  return callbackCaller;
}

export {
  cacheFunction,
};
