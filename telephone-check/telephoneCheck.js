
function telephoneCheck(...args) {
  var telephoneNumber = args[0];
  var telephonePattern =/[0-9](3)[0-9](3)[0-9](4)/;
  return telephonePattern.test(telephoneNumber);
}

export {
  telephoneCheck,
};
