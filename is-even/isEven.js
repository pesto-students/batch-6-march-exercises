function isEven(arg) {
  let number = arg;
  if (number === 1) {
    return false;
  }
  while (number !== 1) {
    if (number === 0) {
      return false;
    }
    number /= 2;
  }
  return true;
}

export { isEven };
