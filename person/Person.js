
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const numbersInDateOfBirth = this.dateOfBirth.split('/');
    return numbersInDateOfBirth.reduce((sumOfNumbers, numPartOfDob) => {
      const sumOfNumPartDigits = numPartOfDob.split('').reduce((sumOfNumPart, singleDigit) => sumOfNumPart + parseInt(singleDigit, 10), 0);
      return sumOfNumbers + sumOfNumPartDigits;
    }, 0);
  }
}

export {
  Person,
};
