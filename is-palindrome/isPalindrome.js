
function isPalindrome(value) {
  const string = String(value);
  const matchedString = string.toLowerCase().match(/[a-z0-9]/ig);
  return matchedString.join() === matchedString.reverse().join();
}

export {
  isPalindrome,
};
