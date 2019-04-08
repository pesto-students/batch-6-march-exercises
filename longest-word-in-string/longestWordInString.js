
function longestWordInString(givenSentence) {
  var givenSentenceWords = givenSentence.split(" ");
  givenSentenceWords.sort(function(firstWord, secondWord){
    return firstWord.length - secondWord.length;
  })
  var longestWordLength = givenSentenceWords[givenSentenceWords.length - 1].length;
  return longestWordLength;
}

export {
  longestWordInString,
};
