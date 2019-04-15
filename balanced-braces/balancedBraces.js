
const openingBraces = ['{', '(', '['];
const closingBraces = ['}', ')', ']'];
const correspondingOpeningBrace = {
  '}': '{',
  ')': '(',
  ']': '[',
};
function balancedBraces(string) {
  const stack = [];

  for (const char of string) {
    if (openingBraces.includes(char)) {
      stack.push(char);
    } else if (closingBraces.includes(char)) {
      const lastBrace = stack.pop();
      if (lastBrace !== correspondingOpeningBrace[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
