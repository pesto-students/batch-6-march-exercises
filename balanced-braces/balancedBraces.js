// split the string
// initialize the stack
// peek the first element in stack
// if first element is stack is opposite pair of current element
// pop that element from stack
// is not push it on the stack.
// if stack length is 0 braces are balanced return true

function balancedBraces(string) {
  const chars = string.split('');
  const braces = ['{', '}', '(', ')', '['];
  const peek = (stackTop, current, open, close) => () => stackTop === open && current === close;
  const stack = chars.reduce((acc, elm) => {
    if (peek(acc[acc.length - 1], elm, '{', '}')
      || peek(acc[acc.length - 1], elm, '(', ')')
      || peek(acc[acc.length - 1], elm, '[', ']')
    ) {
      acc.pop();
    }
    if (braces.indexOf(elm) > -1) {
      acc.push(elm);
    }
    return acc;
  }, []);
  console.log(stack);
  return stack.length === 0;
}

export { balancedBraces };
