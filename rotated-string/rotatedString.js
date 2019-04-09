
function rotatedString(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }
  if (firstString === secondString) {
    return false;
  }
  const stringLength = firstString.length;
  for (let j = 1; j < stringLength; j += 1) {
    if (firstString[0] === secondString[j]) {
      let currentlyMatched = 1;
      let firstStringIndex = 1;
      let secondStringIndex = j + 1;
      while (currentlyMatched < stringLength) {
        if (firstString[firstStringIndex] === secondString[secondStringIndex]) {
          currentlyMatched += 1;
          firstStringIndex += 1;
          secondStringIndex = (secondStringIndex + 1) % stringLength;
        } else {
          break;
        }
      }
      if (currentlyMatched === stringLength) {
        return true;
      }
    }
  }
  return false;
}

export {
  rotatedString,
};
