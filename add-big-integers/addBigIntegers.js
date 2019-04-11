
const addLargeString = (firstNumber, secondNumber) => {
  const smallNumber = firstNumber.length <= secondNumber.length ? firstNumber : secondNumber;
  const bigNumber = secondNumber.length >= firstNumber.length ? secondNumber : firstNumber;

  let totalSum = '';
  let carry = 0;
  let digitsSum;
  for (let i = 1; i <= bigNumber.length; i += 1) {
    const firstDigit = parseInt(bigNumber.charAt(bigNumber.length - i), 10);
    let secondDigit = parseInt(smallNumber.charAt(smallNumber.length - i), 10);
    secondDigit = isNaN(secondDigit) ? 0 : secondDigit;

    const tempString = (carry + firstDigit + secondDigit).toString();
    digitsSum = tempString.charAt(tempString.length - 1);
    carry = parseInt(tempString.substr(0, tempString.length - 1), 10);
    carry = isNaN(carry) ? 0 : carry;

    totalSum = digitsSum + totalSum;
  }

  totalSum = ((carry > 0) ? carry : '') + totalSum;
  return totalSum;
};

function addBigIntegers(string) {
  const numbers = string.split('\n');
  const totalNumbersToSum = Number(numbers[0]);

  let totalSum = numbers[1] === undefined ? 0 : numbers[1];
  for (let i = 2; i <= totalNumbersToSum; i += 1) {
    const currentNumber = numbers[i];
    totalSum = addLargeString(totalSum, currentNumber);
  }
  return totalSum;
}

export {
  addBigIntegers,
};
