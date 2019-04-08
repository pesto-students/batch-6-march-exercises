
function reverseString(...args) {
  var givenString = args[0]; 
  var reversedString = "";
  for ( var i = givenString.length - 1 ; i >= 0 ; i-- ){
      reversedString = reversedString + givenString.charAt(i);
  }
  return reversedString;
}

export {
  reverseString,
};
