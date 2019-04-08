
function chunkArrayInGroups(arr, chunkArraySize){  
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunkArraySize))
  }

return results;
}

export {
  chunkArrayInGroups,
};
