
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const { length } = this.dateOfBirth;
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
      const char = this.dateOfBirth.charAt(i);
      const number = parseInt(char, 10);
      if (!Number.isNaN(number)) {
        sum += number;
      }
    }
    return sum;
  }
}

export {
  Person,
};
