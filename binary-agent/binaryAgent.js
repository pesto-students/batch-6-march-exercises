
function binaryAgent(...args) {
  const binaryStringArray = args[0].split(' ');
  let resultText = '';
  binaryStringArray.forEach((binaryString) => {
    const charCode = parseInt(binaryString, 2);
    const character = String.fromCharCode(charCode);
    resultText += character;
  });
  return resultText;
}

export {
  binaryAgent,
};
