function rot13(string) {
  const charCodes = [];
  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);
    if (charCode >= 65 && charCode < 78) { // handle A-M
      charCodes.push(charCode + 13);
    } else if (charCode >= 78 && charCode <= 90) { // handle N-Z
      charCodes.push(charCode - 13);
    } else if (charCode >= 97 && charCode < 110) { // handle a-m
      charCodes.push(charCode + 13);
    } else if (charCode >= 110 && charCode <= 122) { // handle n-z
      charCodes.push(charCode - 13);
    } else {
      charCodes.push(charCode);
    }
  }

  return String.fromCharCode(...charCodes);
}

export {
  rot13,
};
