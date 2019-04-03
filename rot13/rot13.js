
const decodeRot13Char = (char) => {
  const charCode = char.charCodeAt(0);

  const charInRange = el => el > 64 && el < 91;
  if (!charInRange(charCode)) {
    return char;
  }

  const newCharCode = charCode - 13 < 65 ? charCode + 13 : charCode - 13;
  return String.fromCharCode(newCharCode);
};

function rot13(encodedString) {
  let decodedString = '';
  for (const char of encodedString) {
    decodedString += decodeRot13Char(char);
  }
  return decodedString;
}

export {
  rot13,
};
