
function rot13(encodedString) {
  var decodedCharacters = [];
  for(var i = 0; i < encodedString.length; i++){
    if(/[A-Z]/.test(encodedString[i])){
      var decodedCharacterCode= encodedString.charCodeAt(i) - 13;
      if(decodedCharacterCode < 65){
        decodedCharacterCode = 91 - (65 - decodedCharacterCode);
      }
      decodedCharacters[i] = String.fromCharCode(decodedCharacterCode);
    }else{
      decodedCharacters[i] = encodedString[i];
    }
  }
  return decodedCharacters.join("");
}

export {
  rot13,
};
