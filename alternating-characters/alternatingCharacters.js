
function alternatingCharacters(stringArray) {
  return stringArray.map((string) => {
    let totalDeletions = 0;
    string.split('').reduce((previousChar, currentChar) => {
      if (previousChar === currentChar) {
        totalDeletions += 1;
      }
      return currentChar;
    });
    return totalDeletions;
  });
}

export {
  alternatingCharacters,
};
