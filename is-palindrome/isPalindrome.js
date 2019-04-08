
function isPalindrome(givenWord) {
  var givenWordcharacters = givenWord.toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');

  var reverseWordCharacters = []
  for(var i = givenWordcharacters.length - 1; i >= 0; i--){
    reverseWordCharacters.push(givenWordcharacters[i]);
  }
  console.log(reverseWordCharacters.join(''), givenWordcharacters.join(''));
  return reverseWordCharacters.join('') === givenWordcharacters.join('');
}

export {
  isPalindrome,
};
