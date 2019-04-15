
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dob = this.dateOfBirth.split('');
    const isDigit = digit => /\d/.test(digit);
    const digits = dob.filter(isDigit);
    return digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
}

export {
  Person,
};
