
function alternatingCharacters(array) {
  return array.map((currentString)=>{
    var characters = currentString.split('');
    return characters.reduce((totalDeletions, character, characterIndex, array)=>{
      var previousChar = array[characterIndex - 1];
      var isEqualToPrev = character === previousChar;
      if(isEqualToPrev){
        totalDeletions+=1;
      }
      return totalDeletions;

    },0)
    
  })
  
}

export {
  alternatingCharacters,
};
