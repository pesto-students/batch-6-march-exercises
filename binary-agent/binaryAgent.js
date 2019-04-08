
function binaryAgent(binaryString) {
  const binaries = binaryString.split(' ');
  return binaries.reduce((string, currentValue) => {
    const unicode = parseInt(currentValue, 2);
    return string + String.fromCharCode(unicode);
  }, '');
}

export {
  binaryAgent,
};
