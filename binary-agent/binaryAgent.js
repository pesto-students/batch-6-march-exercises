
function binaryAgent(binaryString) {
  var binaryStringParts = binaryString.split(' ');
  var translatedSentence = '';
  binaryStringParts.forEach(function(binaryStringPart){
    translatedSentence += String.fromCharCode(parseInt(binaryStringPart, 2));
  })
  return translatedSentence;
}

export {
  binaryAgent,
};
