
function threeSum(array, number) {
  if (!Array.isArray(array) || typeof number !== 'number' || array.length < 3) {
    return () => {
      throw new Error();
    };
  }

  let found = false;
  let numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    if (found) {
      break;
    }
    for (let j = i + 1; j < array.length; j += 1) {
      if (found) {
        break;
      }
      for (let k = j + 1; k < array.length; k += 1) {
        const sum = array[i] + array[j] + array[k];
        if (sum === number) {
          found = true;
          numbers = [array[i], array[j], array[k]];
          break;
        }
      }
    }
  }
  return found ? numbers : null;
}

export {
  threeSum,
};
