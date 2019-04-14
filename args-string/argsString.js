
function argsString(argString, values) {
  return values.reduce((acc, value) => acc.replace('{}', value), argString);
}

export {
  argsString,
};
