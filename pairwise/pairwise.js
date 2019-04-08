function pairwise(array, sum) {
  const getIndexOfPair = val => array.indexOf(sum - val);

  const indices = array.reduce((res, val, currentIndex) => {
    const invalidIndex = (index1, index2) => index1 === index2 || index2 === -1 || index1 in res || index2 in res;
    const indexOfPair = getIndexOfPair(val);
    if (invalidIndex(currentIndex, getIndexOfPair(val))) {
      return res;
    }
    return [...res, currentIndex, indexOfPair];
  }, []);

  return indices.reduce((total, val) => total + val, 0);
}

export {
  pairwise,
};
