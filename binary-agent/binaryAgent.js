
function binaryAgent(...args) {
  var stringInBinaryFormat = args[0];
   
  return stringInBinaryFormat.split(" ").map(singleWord => String.fromCharCode(parseInt(singleWord,2))).join("");
}

export {
  binaryAgent,
};
