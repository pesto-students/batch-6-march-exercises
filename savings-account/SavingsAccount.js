
function SavingsAccount(...args) {
  this._accountNumber = args[0];
  this._email = args[1];
  this._firstName = args[2];
  this._lastName = args[3]; 
  var accountNumberPattern = /[0-9]{6}/;
  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
  var firstNamePattern = /[a-zA-Z]{3,20}/;
  var lastNamePattern = /[a-zA-Z]+/
  if( !accountNumberPattern.test( this._accountNumber ) )
  throw ('Account Number must be a 6-digit number');
  if( !emailPattern.test( this._email ) )
  throw ('Invalid e-mail');
  if( !firstNamePattern.test( this._firstName ) )
  throw ('First name must be between 3 and 20 characters long');
  if( !lastNamePattern.test( this._lastName ) )
  throw ('Last name must contain english alphabets only');
  
  // return {
  //   _accountNumber: accountNumber,
  //     _email: email,
  //     _firstName: firstName,
  //     _lastName: lastName,
  //     products: [],
  // };
}

export {
  SavingsAccount,
};
