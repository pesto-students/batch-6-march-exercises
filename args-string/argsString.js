
function argsString(string, array) {
  return array.reduce((acc, word) => acc.replace(/\{\}/, word), string);
}

export {
  argsString,
};
