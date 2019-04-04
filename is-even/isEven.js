
function isEven(number) {
  if ((number / 2) - parseInt(number / 2, 10)) {
    return false;
  }
  return true;
}

export {
  isEven,
};
