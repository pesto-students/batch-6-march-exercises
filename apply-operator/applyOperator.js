function applyOperator(operator, ...operands) {
  switch (operator) {
    case '+':
      return operands.reduce((total, currentValue) => total + currentValue, 0);

    case '-':
      return operands.reduce((difference, currentValue) => difference - currentValue, 0);

    case '*':
      return operands.reduce((product, currentValue) => product * currentValue);

    case '/':
      return parseFloat(
        Number(operands.reduce((quotient, currentValue) => quotient / currentValue)).toFixed(4),
      );

    case '%':
      return operands.reduce((modulus, currentValue) => modulus % currentValue);

    default:
      throw new Error('Please specify a valid operator!');
  }
}

export default applyOperator;
