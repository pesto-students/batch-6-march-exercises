
function threeSum(numbers, sum) {
  if (numbers.length < 3 || typeof sum !== 'number') {
    return () => { throw new Error(); };
  }

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      for (let k = j + 1; k < numbers.length; k += 1) {
        if (numbers[i] + numbers[j] + numbers[k] === sum) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }

  return null;
}

export {
  threeSum,
};
