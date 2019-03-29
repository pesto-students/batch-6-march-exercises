
function SavingsAccount(accountNumber, email, firstName, lastName) {
  this.validate(accountNumber, email, firstName, lastName);
  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = firstName;
  this._lastName = lastName;
  this.products = []
}

SavingsAccount.prototype.validate = function(accountNumber, email, firstName, lastName){
  var accountNumberValidator = /\d{6}/;
  if(!accountNumberValidator.test(accountNumber)){
    throw new Error('Account Number must be a 6-digit number');
  }
  var emailValidator = /^[\w\.]+@[\w\.]+\.\w+$/;
  if(!emailValidator.test(email)){
    throw new Error('Invalid e-mail');
  }
  var firstNameValidator = /^[a-zA-Z]{3,20}$/;
  if(!firstNameValidator.test(firstName)){
    throw new Error('First name must be between 3 and 20 characters long');
  }
  var lastNameValidator = /^[a-zA-Z]+$/;
  if(!lastNameValidator.test(lastName)){
    throw new Error('Last name must contain english alphabets only');
  }
}

export {
  SavingsAccount,
};
