
function applyOperator(...args) {
  if(args[0] === undefined){
    throw new Error('operator is not defined');
  }
  var operator = args[0];
  var result = args[1] !== undefined ? args[1] : 0;
  for (var i = 2; i < args.length; i++){
    switch (operator){
      case '+':
        result = result + args[1];
        break;
      case '-':
        result = result - args[1];
        break;
      case '*':
        result = result * args[1];
        break;
      case '/':
        result = result / args[1];
        break;
      case '%':
        result = result % args[1];
        break;      
    }
  }
  return result;
}

export {
  applyOperator,
};
