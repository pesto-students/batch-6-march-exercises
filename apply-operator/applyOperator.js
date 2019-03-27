
function applyOperator(...args) {
  var operator = args[0];
  if(operator === undefined){
    throw new Error('operator is not defined');
  }
  // args.shift();
  // var operands = args;

  // if(operands.length === 0) {
  //   return 0;
  // }
    
  return 0;
}

export {
  applyOperator,
};
