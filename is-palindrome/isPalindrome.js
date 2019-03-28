
function isPalindrome(givenWord) {
  var givenWordcharacters = givenWord.replace(/[^a-zA-Z]/, '').split('');
  var reverseWordCharacters = []
  for(var i = givenWordcharacters.length - 1; i >= 0; i--){
    reverseWordCharacters.push(givenWordcharacters[i]);
  }
  return reverseWordCharacters.join('') === givenWordcharacters.join('');
}

export {
  isPalindrome,
};
