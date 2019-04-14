
function argsString(sentence, words) {
  return words.reduce((acc, cur) => acc.replace('{}', cur), sentence);
}

export {
  argsString,
};
