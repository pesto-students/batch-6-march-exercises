function applyOperator(...args) {
  const operators = ['+', '-', '*', '%', '/'];
  if (operators.indexOf(args[0]) === -1) {
    throw new Error('Please provide correct operator +, -, %, *, /');
  }
  if (args.length === 2 && args[0] === '%') {
    return args[1];
  }
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
  };
  let initialValue = 1;
  if (args[0] === '+' || args[0] === '-') {
    initialValue = 0;
  }

  const number = args.slice(1).reduce((acc, el) => operations[args[0]](acc, el), initialValue);
  return parseFloat(number.toFixed(4), 10);
}

export default applyOperator;
