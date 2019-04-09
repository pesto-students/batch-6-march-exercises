
function reverseString(string) {
  return string.split('').reduce((acc, current) => current + acc, '');
}

export {
  reverseString,
};
