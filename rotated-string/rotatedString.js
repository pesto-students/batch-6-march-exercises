
function rotatedString(...args) {
  var stringToBeRotated = args[0];
  var rotatedString = args[1];
  var leftString = stringToBeRotated.substr(0,stringToBeRotated.length/2);
  var rightString = stringToBeRotated.substr( stringToBeRotated.length/2 );
  
  return rotatedString===(rightString+leftString);
}

export {
  rotatedString,
};
