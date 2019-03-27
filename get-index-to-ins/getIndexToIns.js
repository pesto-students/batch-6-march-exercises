
function getIndexToIns(...args) {
  var array = args[0];
  var number = args[1];
  var index;
  array.sort(function(a,b) {
    return a - b;
  });
  
  for(var i = 0; i < array.length; i++){
    if(array[i] <= number ){
      index = i;
    }  
  }
  index = index === undefined ? array.length : index;
  return index;
}

export {
  getIndexToIns,
};
