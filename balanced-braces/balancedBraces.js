function balancedBraces(string) {
  const regex = /[{|}|[|\]|(|)]/g;
  const match = string.match(regex);
  const stack = [];
  const oppBraces = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  for (const brace of match) {
    if (brace === '{' || brace === '[' || brace === '(') {
      stack.push(brace);
    }
    if (brace === '}' || brace === ']' || brace === ')') {
      if (stack[stack.length - 1] === oppBraces[brace]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export { balancedBraces };
