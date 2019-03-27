
function applyOperator(...args) {
  var operator = {
    '+': function(a, b){return a+b},
    '-': function(a, b){return a-b},
    '*': function(a, b){return a*b},
    '/': function(a, b){return a/b},
    '%': function(a, b){return a%b}
  };
  if(operator.hasOwnProperty(args[0])){
    return args.slice(1).reduce(function(total, currentValue){
      return operator[args[0]](total, currentValue);
    }, 0);
  };
  throw new Error('Please provide correct operator +, -, %, /');
}

export {
  applyOperator,
};
