
function reverseString(givenString) {
  var givenStringCharacters = givenString.split('');
  var charactersInReverse = []
  for(var i = givenStringCharacters.length - 1; i >= 0; i--){
    charactersInReverse.push(givenStringCharacters[i]);
  }

  return charactersInReverse.join('');
  
}

export {
  reverseString,
};
