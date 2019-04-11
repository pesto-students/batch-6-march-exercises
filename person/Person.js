
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobDigits = this.dateOfBirth.match(/\d/g);
    return dobDigits.reduce((acc, cur) => acc + Number(cur), 0);
  }
}

export {
  Person,
};
