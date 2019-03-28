
function chunkArrayInGroups(...args) {
  var array = args[0];
  var chunkLength = args[1];
  var arrayGroup = [];
  var subArray = [];
  for (var i = 0; i < array.length; i = i+chunkLength){
      subArray = array.slice(i, i + chunkLength);
      arrayGroup.push(subArray);
  }
  return arrayGroup;
}

export {
  chunkArrayInGroups,
};
