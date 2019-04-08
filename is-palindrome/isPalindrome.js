function isPalindrome(string) {
  if (Number(string)) {
    string = string.toString();
  }
  var filteredString = string.replace(/[^0-9a-z]/gi, '');
  var lowerCaseString = filteredString.toLowerCase();
  
  var chars = lowerCaseString.split('');
  chars.reverse();
  var reverseString = chars.join('');
  
  return lowerCaseString == reverseString;
}

export {
  isPalindrome,
};
