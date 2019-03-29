
function isTriangle(firstSide, secondSide, thirdSide) {
  return ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (thirdSide + firstSide > secondSide));
}

export {
  isTriangle,
};
