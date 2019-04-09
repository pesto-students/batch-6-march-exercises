
function longestWordInString(string) {
  let maxLength = 0;
  string.split(' ').forEach((word) => {
    const wordLength = word.length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  });
  return maxLength;
}

export {
  longestWordInString,
};
