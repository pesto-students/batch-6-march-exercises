
function chunkArrayInGroups(arr, chunkArraySize){
  if(arr.length < chunkArraySize){
    return arr;
  } 
  const firstChunk = arr.slice(0, chunkArraySize);
  return [firstChunk].concat(chunk(arr.slice(chunkArraySize, arr.length), chunkArraySize));

}

export {
  chunkArrayInGroups,
};
