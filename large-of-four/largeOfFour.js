
function largeOfFour(...args) {
  var twoLevelArray = args[0];
  var largeOfFourArray = [];
  for( var i = 0 ; i < twoLevelArray.length ; i++ ){
    var largestNumberInRow = 0;
    for( var j = 0 ; j < twoLevelArray[i].length ; j++){
      if ( twoLevelArray[i][j] > largestNumberInRow )
      largestNumberInRow = twoLevelArray[i][j] ;

    }
    largeOfFourArray[i] = largestNumberInRow;
  }
  return largeOfFourArray;
}

export {
  largeOfFour,
};
