
function limitFunctionCallCount(callback, number) {
  var callCount = 0;
  return (...args) => {
    if(callCount < number){
      callCount++;
      return callback(...args);  
    }
    return null;
  }
}

export {
  limitFunctionCallCount,
};
