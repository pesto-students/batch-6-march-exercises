
const shiftCharRight = (char) => {
  const charCode = char.charCodeAt(0);
  const isLoweCaseZ = charCode === 122;
  const isUpperCaseZ = charCode === 90;
  const lowerCaseA = 97;
  const upperCaseA = 65;
  let shiftedCharCode = null;
  if (isLoweCaseZ) {
    shiftedCharCode = lowerCaseA;
  } else if (isUpperCaseZ) {
    shiftedCharCode = upperCaseA;
  } else {
    shiftedCharCode = charCode + 1;
  }
  return String.fromCharCode(shiftedCharCode);
};

function alphabeticShift(string) {
  return string.split('').map(shiftCharRight).join('');
}

export {
  alphabeticShift,
};
