function splitEvery(size, arr) {
  if (!arr || arr.length === 0){ 
   throw "No array"
  }
  const firstChunk = arr.slice(0, size); 
  if (!firstChunk.length) {
    return arr;
  }
  return [firstChunk].concat(splitEvery(size, arr.slice(size, arr.length))); 
}

export {
  splitEvery,
};
