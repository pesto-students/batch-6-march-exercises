function charsToDelete(string) {
  let deletions = 0;
  let prevChar;
  for (const char of string) {
    if (prevChar === char) {
      deletions += 1;
    }
    prevChar = char;
  }
  return deletions;
}

function alternatingCharacters(strings) {
  return strings.reduce((acc, currentValue) => [...acc, charsToDelete(currentValue)], []);
}

export {
  alternatingCharacters,
};
