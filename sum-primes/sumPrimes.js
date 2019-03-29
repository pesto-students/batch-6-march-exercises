function isPrime(number){
  var isPrime = true;
  for(var i = 2; i <= number/2; i++){
    if(number % i === 0){
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function sumPrimes(number) {
  if (number < 2){
    return number;
  }
  var sum = 0;
  for(var pointer = 2; pointer <= number; pointer++){
      if(isPrime(pointer)){
        sum = sum + pointer;
      }
  }
  return sum;
}

export {
  sumPrimes,
};
