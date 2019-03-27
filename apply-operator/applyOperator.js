import { throwError } from "rxjs";

function applyOperator(...args) {
  let operator=agrs[0];
  var result=0;
  if(operator === "+") {
      result=0;
    for(var i=1;i<args.length;i++){
      result=result+args[i];
    }
  }
  else  if(operator === "-") {
     result=0;
    for(var i=1;i<args.length;i++){
      result=result-args[i];
    }
  }
  else  if(operator === "*") {
     result=1;
    for(var i=1;i<args.length;i++){
      result=result*args[i];
    }
  }
  else  if(operator === "/") {
      result=1;
    for(var i=1;i<args.length;i++){
      result=result/args[i];
    }
  }
  else  if(operator === "%") {
     result=0;
    for(var i=1;i<args.length;i++){
      result=result%args[i];
    }
  }
  else{
    throwError('No proper operator specified');
  }
  return result;
}

export {
  applyOperator,
};
