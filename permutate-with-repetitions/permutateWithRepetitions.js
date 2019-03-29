
function permutateWithRepetitions(arr) {
  if(arr.length === 1 ){
    return arr;
  } 

  const permutations = [];
  const smallerPermutations = permutateWithRepetitions(
    arr,
    arr.length - 1,
  );
  
  arr.forEach((currentOption) => {
    console.log(currentOption);
    smallerPermutations.forEach((smallerPermutation) => {
      console.log(smallerPermutation);
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });
  return permutations;
}

export {
  permutateWithRepetitions,
};
