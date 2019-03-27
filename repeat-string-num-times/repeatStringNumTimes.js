
function repeatStringNumTimes(...args) {
  var givenString = args[0]; 
  var repetitionCount = args[1];
  var repeatedString = "";
  if( repetitionCount > 0 )
  for ( var i = 0 ; i < repetitionCount ; i++ ){
      repeatedString += givenString;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
