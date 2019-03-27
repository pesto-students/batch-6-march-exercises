
function applyOperator(...args) {
  var operation=agrs[0];
  if(operation==="+"){
    var result=0;
    for(var i=1;i<args.length;i++){
      result=result+args[i];
    }
  }
  return result;
}

export {
  applyOperator,
};
