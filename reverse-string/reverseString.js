
function reverseString(string) {
  let resultString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    resultString += string[i];
  }
  return resultString;
}

export {
  reverseString,
};
