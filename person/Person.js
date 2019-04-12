
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobChars = this.dateOfBirth.split('');
    const isNumber = el => Number.isInteger(parseInt(el, 10));
    const dobDigits = dobChars.filter(isNumber);
    return dobDigits.reduce((sum, el) => sum + parseInt(el, 10), 0);
  }
}

export {
  Person,
};
