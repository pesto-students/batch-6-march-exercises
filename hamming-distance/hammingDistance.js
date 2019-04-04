
function hammingDistance(string1, string2) {
  const sameLengthString = (str1, str2) => str1.length === str2.length;
  if (!sameLengthString(string1, string2)) {
    throw new Error('Strings are not of same length');
  }

  const chars = string1.split('');
  return chars.reduce((acc, char, currentIndex) => {
    if (char !== string2[currentIndex]) {
      // eslint-disable-next-line no-param-reassign
      acc += 1;
    }
    return acc;
  }, 0);
}

export {
  hammingDistance,
};
