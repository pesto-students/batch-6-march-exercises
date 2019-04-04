
function isOdd(number) {
  if ((number / 2) - parseInt(number / 2, 10)) {
    return true;
  }
  return false;
}

export {
  isOdd,
};
