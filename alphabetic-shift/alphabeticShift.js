

const shiftcurrent = (char) => {
  let code = char.charCodeAt(0) + 1;

  if (/[a-z]/g.test(char)) {
    code = code > 122 ? (code % 122) + 96 : code;
  }
  if (/[A-Z]/g.test(char)) {
    code = code > 122 ? (code % 122) + 96 : code;
  }
  return code;
};


function alphabeticShift(text) {
  const chars = text.split('');
  const shiftChar = character => String.fromCharCode(shiftcurrent(character));
  return chars.reduce((acc, char) => `${acc}${shiftChar(char)}`, '');
}

export {
  alphabeticShift,
};
