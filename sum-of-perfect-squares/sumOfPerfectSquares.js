
function sumOfPerfectSquares(number) {
  if (number <= 3){
    return number;   
  }

  var result = number;
  for(var i = 1; i <= number; i++) {
    const sqr = i*i;
    if(sqr > number){
      break;
    }
    result = Math.min(result, 1 + sumOfPerfectSquares(number - sqr));
  }
  
  return result;
}

export {
  sumOfPerfectSquares,
};
