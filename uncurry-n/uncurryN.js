
function uncurryN(number, curryFn) {
  const innerFunc = (...args) => {
    const curryFnLength = curryFn.length;
    if (args.length <= curryFnLength || number === 1) {
      return curryFn(...args);
    }
    const curryFnArgs = args.splice(0, curryFnLength);
    return uncurryN(number - 1, curryFn(...curryFnArgs))(...args);
  };

  Object.defineProperty(innerFunc, 'length', {
    value: number,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  return innerFunc;
}


// function a3(a) {
//   return b => c => a + b + c;
// }

// const uncurried = uncurryN(3, a3);
// console.log(uncurried(1, 2, 3));

export {
  uncurryN,
};
