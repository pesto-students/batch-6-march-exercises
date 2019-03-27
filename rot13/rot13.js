
function rot13(cypherText) {
  let plainText = '';
  const upperCaseACharCode = 65;
  const upperCaseZCharCode = 90;
  const upperCaseNCharCode = 78;
  for (let i = 0; i < cypherText.length; i += 1) {
    const charCode = cypherText.charCodeAt(i);
    if (charCode >= upperCaseACharCode && charCode <= upperCaseZCharCode) {
      if (charCode < upperCaseNCharCode) {
        plainText += String.fromCharCode(charCode + 13);
      } else {
        plainText += String.fromCharCode(charCode - 13);
      }
    } else {
      plainText += cypherText[i];
    }
  }
  return plainText;
}

export {
  rot13,
};
