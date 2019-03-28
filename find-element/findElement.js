
function findElement(...args) {
  var arrayToBeTested = args[0]; 
  var testingFunction = args[1];

var testArray = function(previousObject, currentObject){
  
      if (testingFunction(previousObject))
      return previousObject;
      else if(testingFunction(currentObject))
      return currentObject;
       
}
  return arrayToBeTested.reduce(testArray);
   
}

export {
  findElement,
};
