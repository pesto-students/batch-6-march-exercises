
function squareNumbersArray(...args) {
  var containsString = args.some(function (value) {
    return typeof value === 'string';
  })
  if (containsString) {
    throw new Error('My custom error');
  }
  return args.map((value) => {
    return value * value;
  })
}

export {
  squareNumbersArray,
};
