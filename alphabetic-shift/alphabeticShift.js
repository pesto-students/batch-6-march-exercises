
const nextCharCode = (charCode) => {
  if (charCode === 90) {
    return 65;
  }
  if (charCode === 122) {
    return 97;
  }
  return charCode + 1;
};


const charCodeToChar = charCode => String.fromCharCode(charCode);

const nextChar = (char) => {
  const charCode = char.charCodeAt(0);
  const newCharCode = nextCharCode(charCode);
  return charCodeToChar(newCharCode);
};

function alphabeticShift(string) {
  let newString = '';
  for (const char of string) {
    newString += nextChar(char);
  }
  return newString;
}

export {
  alphabeticShift,
};
