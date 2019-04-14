
function placeInMiddle(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }
  if (array1.length === 1) {
    return [...array2, ...array1];
  }

  const split1 = array1.filter((elm, idx) => idx < (array1.length / 2));
  const split2 = array1.filter((elm, idx) => idx >= (array1.length / 2));
  return [...split1, ...array2, ...split2];
}

export {
  placeInMiddle,
};
