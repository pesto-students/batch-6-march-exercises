

function alphabeticShift(text) {
  const chars = text.split('');
  const shiftChar = character => String.fromCharCode((character.charCodeAt(0) + 1));
  return chars.reduce((acc, char) => `${acc}${shiftChar(char)}`, '');
}

export {
  alphabeticShift,
};
