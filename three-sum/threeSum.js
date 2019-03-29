
function threeSum(array, sum) {
  if(Array.isArray(array) !== true || array.length < 3 || typeof sum !== 'number'){
    throw new Error('Invalid input parameters');
  }
  var foundTriplet = false;
  var triplets = [];
  for(var i = 0; i < array.length; i++){
    if(foundTriplet === true){
      break;
    }
    for(var j = i+1; j < array.length; j++){
      if(foundTriplet === true){
        break;
      }
      for(var k = j+1; k < array.length; k++){
          if((array[i] + array[j] + array[k]) == sum) {
            foundTriplet = true;  
            triplets = [array[i], array[j], array[k]];
            break;
          } 
      }
    
    }  
  }

  if(foundTriplet === false){
    return null;
  }

  return triplets;
}

export {
  threeSum,
};
