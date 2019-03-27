
function isTriangle(...args) {
  var firstSide = args[0];
  var secondSide = args[1];
  var thirdSide = args[0];
  var sumOfSides = firstSide + secondSide + thirdSide;
  return ( firstSide < ( sumOfSides / 2 ) ) && ( secondSide < ( sumOfSides / 2 ) ) && ( thirdSide < ( sumOfSides / 2) ) ;
}

export {
  isTriangle,
};
