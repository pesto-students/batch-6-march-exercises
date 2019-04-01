
function sumEvenArgs(...array) {
  return array.reduce((totalOfEvenNumbers, currentNum) => {
    if (currentNum % 2 === 0) {
      return totalOfEvenNumbers + currentNum;
    }
    return totalOfEvenNumbers;
  }, 0);
}

export {
  sumEvenArgs,
};
