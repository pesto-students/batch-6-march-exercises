
function steamrollArray(array) {
  const flaterenedArray = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      flaterenedArray.push(...steamrollArray(element));
    } else {
      flaterenedArray.push(element);
    }
  });
  return flaterenedArray;
}

export {
  steamrollArray,
};
