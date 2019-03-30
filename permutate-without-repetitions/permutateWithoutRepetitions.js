

function swap(array, firstIndex, secondIndex) {
  const swappedArray = [...array];
  swappedArray[firstIndex] = array[secondIndex];
  swappedArray[secondIndex] = array[firstIndex];
  return swappedArray;
}

function findPermutation(array, result, pivot) {
  if (pivot === 0) {
    result.push(array);
    return;
  }
  for (let i = pivot; i >= 0; i -= 1) {
    findPermutation(swap(array, pivot, i), result, pivot - 1);
  }
}

function permutateWithoutRepetitions(array) {
  const result = [];
  findPermutation(array, result, array.length - 1);
  return result;
}

export {
  permutateWithoutRepetitions,
};
