
function isTriangle(sideOne, sideTwo, sideThree) {
  if (sideOne >= sideTwo + sideThree) {
    return false;
  }
  if (sideTwo >= sideOne + sideThree) {
    return false;
  }
  if (sideThree >= sideOne + sideTwo) {
    return false;
  }
  return true;
}

export {
  isTriangle,
};
