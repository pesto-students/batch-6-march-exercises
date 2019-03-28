function minToCharsToDelForAlternateStr(string) {
  const tempArray = [];
  const stringChars = string.split('');
  return stringChars.reduce(function (minCharsToDel, currentValue) {
      
  }, 0);
}

function alternatingCharacters(strings) {
  return strings.reduce(function(acc, currentValue) {
    return acc.concat([ minToCharsToDelForAlternateStr(currentValue) ])
  }, []);
}

export {
  alternatingCharacters,
};
