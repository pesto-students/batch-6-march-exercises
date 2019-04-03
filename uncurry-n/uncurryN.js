
function uncurryN(number, curryFn) {
  if (number === 1) {
    return args => curryFn(args);
  }

  return (...arg) => {
    const c = curryFn(arg[0]);
    return uncurryN(number - 1, c);
  };
}

export {
  uncurryN,
};
