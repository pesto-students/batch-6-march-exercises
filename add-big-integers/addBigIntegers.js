
function addBigIntegers(string) {
  var numbers = string.split('\n');
  var numbersToAdd = numbers.splice(1);
  return numbersToAdd.reduce(function(sum, currentVal){
    return (parseInt(sum) + parseInt(currentVal)) + '';
  });
}

export {
  addBigIntegers,
};
