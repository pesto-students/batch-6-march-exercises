
function longestWordInString(...args) {
  var stringToBeExamined = args[0];
  var setOfWordsInGivenString = stringToBeExamined.split(" ");
  var sizeOfBiggestWordFound = 0 ;
  for( var i = 0; i < setOfWordsInGivenString.length ; i++ ){
      if( setOfWordsInGivenString[i].length > sizeOfBiggestWordFound )
      sizeOfBiggestWordFound = setOfWordsInGivenString[i].length;
  }
  return sizeOfBiggestWordFound;
}

export {
  longestWordInString,
};
