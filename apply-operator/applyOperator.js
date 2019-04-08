
function applyOperator(...args) {
  var operator = args[0];
  if(operator === undefined){
    throw new Error('operator is not defined');
  }
  
  var operands = args.slice(1);
  var operatorSet = {
    '+' : [(result, currentValue) => result + currentValue, 0],
    '-' : [(result, currentValue) => result - currentValue, 0],
    '*' : [(result, currentValue) => result * currentValue, 1],
    '/' : [(result, currentValue) => parseFloat((result / currentValue).toFixed(4)), 1],
    '%' : [(result, currentValue) => result % currentValue ]
  };

  var evaluatedValue = operands.reduce(...operatorSet[operator]);

  return evaluatedValue;
}

export default applyOperator;
