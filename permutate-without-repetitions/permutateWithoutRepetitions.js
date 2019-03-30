function permutateWithoutRepetitions(arr) {
  var results = [];

  if (arr.length === 1) {
    results.push(arr);
    return results;
  }
  const smallerPermutations = permutateWithoutRepetitions(arr.slice(1));

  const firstOption = arr[0];
    
  for(var i = 0; i < smallerPermutations.length; i++){
    const smallerPermutation = smallerPermutations[i];

    for(var j = 0; j <= smallerPermutation.length; ++){
      
    }
  }
  return results;
}

export {
  permutateWithoutRepetitions,
};
