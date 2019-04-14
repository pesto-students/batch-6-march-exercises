const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '/':
      return firstNumber / secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return undefined;
  }
};

const evaluate = (str) => {
  let numbers = str.match(/(\w+)/g);
  numbers = numbers.map(Number);
  const operators = str.match(/([+\-*\/])/g);
  const operatorsToEvaluate = ['/', '*', '-', '+'];

  for (const operator of operatorsToEvaluate) {
    while (operators.includes(operator)) {
      const index = operators.indexOf(operator);

      numbers[index] = calculate(operator, numbers[index], numbers[index + 1]);
      operators.splice(index, 1);
      numbers.splice(index + 1, 1);
    }
  }

  return numbers[0];
};

const invalidExpression = str => !(/^[+\-*\/0-9]+$/.test(str));
function arithmeticExpressionEvaluator(expressionString) {
  const expression = expressionString.replace(/\s/g, '');

  if (invalidExpression(expression)) {
    throw new Error('Invalid Expression');
  }

  return evaluate(expression);
}

export {
  arithmeticExpressionEvaluator,
};
