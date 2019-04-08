
function sumAll(givenRange) {
  var givenRangeSorted = givenRange.sort(function(firstElement, secondElement){
    return firstElement - secondElement
  })
  var upperBound = givenRangeSorted[1];
  var lowerBound = givenRangeSorted[0];
  var rangeLength = upperBound - lowerBound + 1;
  return (rangeLength*(upperBound+lowerBound)) / 2;
}

export {
  sumAll,
};
