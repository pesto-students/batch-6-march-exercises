class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dateOfBirthDigits = this.dateOfBirth.replace(/\//g, '').split('');

    return dateOfBirthDigits
      .reduce((total, currentNumber) => total + parseInt(currentNumber, 10), 0);
  }
}
export {
  Person,
};
