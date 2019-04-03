
function reverseString(string) {
  const chars = string.split('');
  const reversedChars = chars.reduce((res, val) => [val, ...res], []);
  return reversedChars.join('');
}

export {
  reverseString,
};
