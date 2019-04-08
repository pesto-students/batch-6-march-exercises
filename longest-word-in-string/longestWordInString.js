
function longestWordInString(string) {
  const words = string.split(' ');
  return words.reduce((res, word) => Math.max(res, word.length), 0);
}

export {
  longestWordInString,
};
