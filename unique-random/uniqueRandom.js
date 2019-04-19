
const getRandNumber = (lb, ub) => Math.floor((Math.random() * (ub - lb + 1)) + lb);

function uniqueRandom(lowerBound, upperBound) {
  let prevRandNumber;
  const consecutiveUniqueNumber = () => {
    const randNumber = getRandNumber(lowerBound, upperBound);
    if (randNumber === prevRandNumber) {
      return consecutiveUniqueNumber();
    }
    prevRandNumber = randNumber;
    return randNumber;
  };
  return consecutiveUniqueNumber;
}

export {
  uniqueRandom,
};
