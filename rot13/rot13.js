function rot13(rotString) {
  const a = Array.from(rotString).map((char) => {
    let charcode = char.charCodeAt(0);
    if (charcode > 90 || charcode < 65) {
      return char;
    }
    charcode = charcode + 13 > 90 ? charcode - 13 : charcode + 13;
    return String.fromCharCode(charcode);
  });
  return a.join('');
}

export { rot13 };
