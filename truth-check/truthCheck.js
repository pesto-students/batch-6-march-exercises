
function truthCheck(...args) {
  var arrayToBeCheckedForTruth = args[0];
  var predicateExpectedToBeTrue = args[1];
var truthChecker = function( previousObject, currentObject) {
    return previousObject[ predicateExpectedToBeTrue ] && currentObject[ predicateExpectedToBeTrue ];
};
 return arrayToBeCheckedForTruth.reduce(truthChecker);
  
}

export {
  truthCheck,
};
