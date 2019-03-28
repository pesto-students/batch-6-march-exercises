function minToCharsToDelForAlternateStr(string) {
  const tempArray = [];
  const 
}

function alternatingCharacters(strings) {
  return strings.reduce(function(acc, currentValue) {
    return acc.concat([ minToCharsToDelForAlternateStr(currentValue) ])
  }, []);
}

export {
  alternatingCharacters,
};
