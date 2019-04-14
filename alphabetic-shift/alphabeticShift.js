
function alphabeticShift(stringArray) {
  return String.fromCharCode(...(stringArray.split('').map(char => char.charCodeAt(0) + 1)));
}

export {
  alphabeticShift,
};
