
function abbreviateString(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected string to abbreviate');
  }
  const words = text.split(' ');
  const lastChar = words[words.length - 1].toUpperCase().charAt(0);
  const abbreviatedLastChar = lastChar.concat('.');
  const firstWord = words[0];
  const abbreviatedString = firstWord.concat(' ', abbreviatedLastChar);
  return abbreviatedString;
}

export {
  abbreviateString,
};
