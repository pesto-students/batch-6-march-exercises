/* eslint-disable no-continue */
function threeSum(arr, target) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const results = [];
  let rightIndex = sortedArray.length - 1;
  let leftIndex = 0;
  for (let index = 0; index < sortedArray.length; index += 1) {
    if (index > 0 && sortedArray[index] === sortedArray[index - 1]) {
      continue;
    }
    while (leftIndex < rightIndex) {
      const currentSum = sortedArray[index] + sortedArray[leftIndex] + sortedArray[rightIndex];
      if (currentSum === target) {
        results.push([sortedArray[index], sortedArray[leftIndex], sortedArray[rightIndex]]);
        while (leftIndex < rightIndex && sortedArray[leftIndex] === sortedArray[leftIndex + 1]) {
          leftIndex += 1;
        }
        while (leftIndex < rightIndex && sortedArray[rightIndex] === sortedArray[rightIndex - 1]) {
          rightIndex -= 1;
        }
        leftIndex += 1;
        rightIndex -= 1;
      } else if (currentSum < target) {
        leftIndex += 1;
      } else if (currentSum > target) {
        rightIndex -= 1;
      }
    }
  }
  return results[0];
}

// console.log(threeSum([5, 3, 2, 1, 0, -1, -2], 3));
export { threeSum };
