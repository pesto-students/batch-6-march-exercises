
function largeOfFour(numberLists) {
  var largestArrayOfNumbers = [];

  numberLists.forEach(function(numberList){
    var largestNumber = 0;
    numberList.forEach(function(number){
      if(number > largestNumber){
        largestNumber = number;
      }
    })
    largestArrayOfNumbers.push(largestNumber);
  })
  return largestArrayOfNumbers;
}

export {
  largeOfFour,
};
