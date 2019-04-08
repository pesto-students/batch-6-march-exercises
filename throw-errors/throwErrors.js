function throwErrors(...args) {
  throw new ReferenceError("ReferenceError");
  return args;
}

export { throwErrors };
