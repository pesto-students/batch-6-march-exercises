
function printFullName(obj) {
  const { first: firstName, last: lastName } = obj;
  return `My name is ${firstName} ${lastName}`;
}

export {
  printFullName,
};
