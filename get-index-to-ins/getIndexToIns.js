
function getIndexToIns(list, numberToInsert) {
  var sortedList = list.sort(function(firstNumber, secondNumber){
    return firstNumber - secondNumber;
  })
  var indexToInsert = list.length;
  for(var i = 0; i < sortedList.length; i++){
    if(numberToInsert <= sortedList[i]){
      indexToInsert = i;
      break;
    }
  }
  return indexToInsert;

  
}

export {
  getIndexToIns,
};
