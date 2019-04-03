
function substitutionCipher(text) {
  const characters = text.split('');
  const testChar = regex => char => regex.test(char);
  const isUpper = testChar(/[A-Z]/);
  const isLower = testChar(/[a-z]/);
  return characters.reduce((acc, currentEl) => {
    let el = currentEl.charCodeAt(0);
    if (isUpper(currentEl)) {
      el = el % 2 === 0 ? (el + 6) % 90 : (el + 4) % 90;
    }
    if (isLower(currentEl)) {
      el = el % 2 === 0 ? (el + 6) % 122 : (el + 4) % 122;
    }
    return acc + String.fromCharCode(el);
  }, '');
}

export {
  substitutionCipher,
};
