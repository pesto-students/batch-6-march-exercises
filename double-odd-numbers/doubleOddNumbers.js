
function doubleOddNumbers(numbers) {
  return numbers.reduce((doubledArray, currentItem) => {
    if (currentItem % 2 !== 0) {
      return doubledArray.concat(currentItem * 2);
    }
    return doubledArray;
  }, []);
}

export {
  doubleOddNumbers,
};
