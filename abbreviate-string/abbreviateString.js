
function abbreviateString(longForm) {
  var isString = typeof longForm === 'string';
  if (!isString) {
    throw new Error('parameter should only be a string');
  }
  var longFormWords = longForm.split(' ');
  return longFormWords.reduce((abbreviation, currentWord, currentIndex, words) => {
    var isLastWord = currentIndex === words.length - 1;
    if (isLastWord) {
      return abbreviation += " " + currentWord.substring(0, 1).toUpperCase() + "."
    }
    return abbreviation
  })
}

export {
  abbreviateString,
};
