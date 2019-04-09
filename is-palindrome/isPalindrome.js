
function isPalindrome(sequence) {
  const alphaNumericRegex = /[a-zA-Z0-9]/g;
  const alphaNumericString = String(sequence).match(alphaNumericRegex).join('');
  const loweCaseString = alphaNumericString.toLowerCase();
  const stringLength = loweCaseString.length;
  for (let i = 0; i < stringLength; i += 1) {
    if (loweCaseString[i] !== loweCaseString[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
