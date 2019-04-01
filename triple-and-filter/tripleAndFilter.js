
function tripleAndFilter(array) {
  return array.reduce((accumulator, currentItem) => {
    if ((currentItem * 3) % 5 === 0) {
      return accumulator.concat(currentItem * 3);
    }
    return accumulator;
  }, []);
}

export {
  tripleAndFilter,
};
