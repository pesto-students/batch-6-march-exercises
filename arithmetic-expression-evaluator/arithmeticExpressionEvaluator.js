
const calculate = (a, b, op) => {
  switch (op) {
    case '*': return a * b;
    case '/': return a / b;
    case '+': return a + b;
    case '-': return a - b;
    default: throw new Error('Unknown operation');
  }
};

function arithmeticExpressionEvaluator(expr) {
  if (typeof expr !== 'string') {
    throw new TypeError('Expected string expression to evaluate');
  }
  const invalidChars = /[^\d+\-*/ \t\n]/;
  if (invalidChars.test(expr)) {
    throw new Error('Invalid character passed in the expression');
  }

  const exprMatcher = /[\d+\-*/]{1,}/g;
  const exprArray = expr.match(exprMatcher);
  const operators = ['*', '/', '-', '+'];
  for (let i = 0; i < operators.length; i += 1) {
    const operator = operators[i];
    while (true) { // eslint-disable-line no-constant-condition
      const operatorIndex = exprArray.indexOf(operator);
      if (operatorIndex === -1) {
        break;
      }
      const firstOperand = Number(exprArray[operatorIndex - 1]);
      const secondOperand = Number(exprArray[operatorIndex + 1]);
      const result = calculate(firstOperand, secondOperand, operator);
      exprArray.splice(operatorIndex - 1, 3, result);
    }
  }
  const result = exprArray[0];
  return result;
}

export {
  arithmeticExpressionEvaluator,
};
