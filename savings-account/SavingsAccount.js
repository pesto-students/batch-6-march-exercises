
function isValidAccount(accountNumber) {
  return accountNumber.length === 6;
}

function isValidEmail(email) {
  const emailRegex = /\w+@\w+.\w+/;
  const validEmail = email.match(emailRegex);
  return validEmail !== null;
}

function isValidFirstName(name) {
  const { length } = name;
  return length >= 3 && length <= 20;
}

function isValidLastName(name) {
  const lastNameRegex = /[^a-zA-Z]+/;
  const nonEnglishCharacters = name.match(lastNameRegex);
  return nonEnglishCharacters === null;
}

class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    if (!isValidAccount(accountNumber)) {
      throw new Error('Account Number must be a 6-digit number');
    }
    if (!isValidEmail(email)) {
      throw new Error('Invalid e-mail');
    }
    if (!isValidFirstName(firstName)) {
      throw new Error('First name must be between 3 and 20 characters long');
    }
    if (!isValidLastName(lastName)) {
      throw new Error('Last name must contain english alphabets only');
    }
    /* eslint-disable no-underscore-dangle */
    this._accountNumber = accountNumber;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this.products = [];
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(name) {
    this._firstName = name;
  }

  getLastName() {
    return this._lastName;
  }

  setLastName(name) {
    this._lastName = name;
  }

  getAccountNumber() {
    return this._accountNumber;
  }

  setAccountNumber(number) {
    this._accountNumber = number;
  }

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }
}

export {
  SavingsAccount,
};
