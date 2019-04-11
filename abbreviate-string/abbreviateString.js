
function abbreviateString(string) {
  if(typeof string !== 'string') {
    throw new Error('Invalid String');
  }

  var words = string.split(' ');
  var firstWord = words[0];
  var lastWord = words[words.length - 1];
  var firstChar = lastWord.charAt(0).toUpperCase();

  return firstWord + ' ' + firstChar+'.';
}

export {
  abbreviateString,
};
