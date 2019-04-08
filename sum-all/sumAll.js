
function sumAll(numbers) {
  numbers.sort();
  var sum = 0;
  for(var i= numbers[0]; i<=numbers[1]; i++){
    sum +=i;
  }
  return sum;
}

export {
  sumAll,
};
