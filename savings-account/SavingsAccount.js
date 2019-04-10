/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */

const validateLength = min => max => str => str.length >= min && str.length <= max;
const validateRegex = regex => str => regex.test(str);

function SavingsAccount(accNum, email, firstName, lastName) {
  Object.defineProperty(this, 'accountNumber', {
    set(val) {
      if (isNaN(val) === true || !validateLength(6)(6)(val)) {
        throw new Error('Account Number must be a 6-digit number');
      }
      this._accountNumber = val;
    },
  });
  this.accountNumber = accNum;

  Object.defineProperty(this, 'email', {
    set(val) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (validateRegex(re)(val) === false) {
        throw new Error('Invalid e-mail');
      }
      this._email = val;
    },
  });
  this.email = email;

  Object.defineProperty(this, 'firstName', {
    set(val) {
      if (!validateLength(3)(20)(val)) {
        throw new Error('First name must be between 3 and 20 characters long');
      }
      this._firstName = val;
    },
  });
  this.firstName = firstName;

  Object.defineProperty(this, 'lastName', {
    set(val) {
      const re = /^[a-zA-Z]*$/;
      if (validateRegex(re)(val) === false) {
        throw new Error('Last name must contain english alphabets only');
      }
      this._lastName = val;
    },
  });
  this.lastName = lastName;
  this.products = [];
}

export {
  SavingsAccount,
};
