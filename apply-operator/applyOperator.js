
function applyOperator(...args) {
  if(typeof args[0] === 'undefined'){
    throw new Error('operator is not defined');
  }
  var operator = args[0];
  var result;
  for (var i = 1; i < args.length; i++){
    switch (operator){
      case '+':
        if(typeof result === 'undefined'){
          result = 0;
        }
        result = result + args[i];
        break;
      case '-':
        if(typeof result === 'undefined'){
          result = 0;
        }
        result = result - args[i];
        break;
      case '*':
        if(typeof result === 'undefined'){
          result = 1;
        }
        result = result * args[i];
        break;
      case '/':
        if(typeof result === 'undefined'){
          result = 1;
        }
        result = result / args[i];
        break;
      case '%':
        if(typeof result === 'undefined'){
          result = args[i];
        }
        else{
          result = result % args[i];  
        }
        break;      
    }
  }
  if(typeof result === 'undefined'){
    return 0;
  }
  return result;
}

export {
  applyOperator,
};
