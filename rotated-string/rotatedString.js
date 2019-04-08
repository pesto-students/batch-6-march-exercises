
function rotatedString(string, rotatingString) {
  const stringLength = string.length;
  for (let i = 1; i < stringLength; i += 1) {
    const rotatingPart = string.slice(stringLength - i);
    const remainingPart = string.slice(0, stringLength - i);
    if (rotatingString === rotatingPart + remainingPart) {
      return true;
    }
  }

  return false;
}

export {
  rotatedString,
};
