function binaryAgent(binaryString) {
  const decodedBinaryString = binaryString
    .split(' ')
    .map(string => String.fromCharCode(parseInt(string, 2)))
    .join('');
  return decodedBinaryString;
}

export { binaryAgent };
