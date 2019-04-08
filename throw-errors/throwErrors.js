
function throwErrors() {
  num2 = 3;
  try{
  return num1 + num2;
  } catch (e) {
    throw new ReferenceError('ReferenceError');
  }
}

export {
  throwErrors,
};
