
function diffArray(...args) {
  var firstArray = args[0];
  var secondArray = args[1];
  var differenceArray = [];

  firstArray.forEach(function(value) {
    if(secondArray.indexOf(value) === -1) {
      differenceArray.push(value);
    }
  });

  secondArray.forEach(function(value) {
    if(firstArray.indexOf(value) === -1) {
      differenceArray.push(value);
    }
  });

  return differenceArray;
}

export {
  diffArray,
};
