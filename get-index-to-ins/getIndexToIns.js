
function getIndexToIns(...args) {
  var array = args[0];
  var number = args[1];
  var index;
  array.sort(function(a,b) {
    return a - b;
  });
  
  for(index = 0; index < array.length; index++){
    if(number <= array[index] ){
      break;
    }  
  }
  // index = index === undefined ? array.length : index;
  return index;
}

export {
  getIndexToIns,
};
