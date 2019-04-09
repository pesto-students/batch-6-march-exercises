const binaryToChar = binary => String.fromCharCode(parseInt(binary, 2));

function binaryAgent(binaryString) {
  return binaryString.split(' ').reduce((acc, current) => acc + binaryToChar(current), '');
}

export {
  binaryAgent,
};
