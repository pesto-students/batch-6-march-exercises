
function applyOperator(operator, ...operands) {
  switch (operator) {
    case '+': {
      return operands.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    case '-': {
      return operands.reduce((accumulator, currentValue) => accumulator - currentValue, 0);
    }
    case '*': {
      return operands.reduce((accumulator, currentValue) => accumulator * currentValue);
    }
    case '/': {
      const result = operands.reduce((accumulator, currentValue) => accumulator / currentValue);
      return parseFloat(Number(result).toFixed(4));
    }
    case '%': {
      return operands.reduce((accumulator, currentValue) => accumulator % currentValue);
    }
    default: throw new Error('Invalid operation');
  }
}

export default applyOperator;
