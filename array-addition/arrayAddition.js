
function arrayAddition(args,arr) {
  if(!arr.every(isNaN) && !args.every(!isNaN)){
    result = [];
    for(var i in arr){
      for (var j in args){
        result.push(i+j);

      }
    }
  }
  throw new Error("not a number");
}

export {
  arrayAddition,
};
