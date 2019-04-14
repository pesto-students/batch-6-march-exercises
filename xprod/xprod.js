
function xprod(firstArray, secondArray) {
  if (firstArray.length === 0 || secondArray.length === 0) {
    return [];
  }
  return firstArray.reduce((acc, curVal) => acc.concat(secondArray.map(el => [curVal, el])), []);
}

export {
  xprod,
};
