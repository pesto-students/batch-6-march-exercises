
function type(arg) {
  if (arg === null) {
    return 'Null';
  }
  if (arg instanceof RegExp) {
    return 'RegExp';
  }
  if (Array.isArray(arg)) {
    return 'Array';
  }
  const typeOfarg = typeof arg;

  return typeOfarg.charAt(0).toUpperCase() + typeOfarg.substring(1);
}

export {
  type,
};
