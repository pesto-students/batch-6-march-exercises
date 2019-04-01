
function doubleOddNumbers(oddNumbers) {
  return oddNumbers.reduce((oddNumbersDoubledArray, number) => {
    const isNumberOdd = number % 2 === 1;
    if (isNumberOdd) {
      oddNumbersDoubledArray.push(number + number);
    }
    return oddNumbersDoubledArray;
  }, []);
}

export {
  doubleOddNumbers,
};
