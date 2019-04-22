
function titleize(string) {
  if (!string) {
    return '';
  }

  const allWords = string.split(/(\W)/);
  return allWords.map((word) => {
    if (!word) {
      return '';
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

export {
  titleize,
};
