function isPalindrome(string) {
  const stringAndDigitsRegex = /[a-zA-Z0-9]/g;
  const filteredString = String(string).match(stringAndDigitsRegex).join('');
  const lowerCaseString = filteredString.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i += 1) {
    if (lowerCaseString[i] !== lowerCaseString[lowerCaseString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
