function chunkArrayInGroups(arr, chunkSize) {
  let chunkedArray = [];
  for (let index = 0; index < arr.length; index += chunkSize) {
    chunkedArray = chunkedArray.concat([arr.slice(index, index + chunkSize)]);
  }
  return chunkedArray;
}
// console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
export { chunkArrayInGroups };
