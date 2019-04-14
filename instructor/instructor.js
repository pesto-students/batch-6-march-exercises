
class Instructor {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHi() {
    this.firstName = 'Ram';
  }
}

const instructor = new Instructor('ab');

export {
  instructor,
};
