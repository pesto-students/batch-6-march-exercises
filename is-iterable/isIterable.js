
function isIterable(argument) {
  return (typeof argument[Symbol.iterator] !== 'undefined');
}

export {
  isIterable,
};
