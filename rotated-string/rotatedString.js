function rotatedString(string, target) {
  if (string === target) {
    return false;
  }
  const stringCopy = string.split('');
  for (let index = 0; index < stringCopy.length; index += 1) {
    const firstChar = stringCopy.shift();
    stringCopy.push(firstChar);
    if (stringCopy.join('') === target) {
      return true;
    }
  }
  return false;
}

export { rotatedString };
