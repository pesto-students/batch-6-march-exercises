
const isAlphabet = (char) => {
  const charCode = char.charCodeAt(0);
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
};

function titleize(string) {
  let lastCharAlphabet = false;
  let newString = '';
  for (const char of string) {
    let currentChar = char.toLowerCase();
    if (lastCharAlphabet === false) {
      currentChar = char.toUpperCase();
    }
    lastCharAlphabet = isAlphabet(currentChar);
    newString += currentChar;
  }
  return newString;
}

export {
  titleize,
};
