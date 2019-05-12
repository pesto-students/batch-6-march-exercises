
function substitutionCipher(text) {
  const characters = text.split('');
  const testChar = regex => char => regex.test(char);
  const isUpper = testChar(/[A-Z]/);
  const isLower = testChar(/[a-z]/);
  return characters.reduce((acc, currentEl) => {
    let el = currentEl.charCodeAt(0);
    if (isUpper(currentEl)) {
      el = el % 2 === 0 ? (el + 6) : (el + 4);
      if (el > 90) {
        el = (el % 90) + 64;
      }
      return acc + String.fromCharCode(el);
    }
    if (isLower(currentEl)) {
      el = el % 2 === 0 ? (el + 6) : (el + 4);
      if (el > 122) {
        el = (el % 122) + 96;
      }
      return acc + String.fromCharCode(el);
    }
    return acc + currentEl;
  }, '');
}

export {
  substitutionCipher,
};
