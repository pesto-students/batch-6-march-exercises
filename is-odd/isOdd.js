
function isOdd( ...args ) {
  var givenNumber = args[0];
  return Math.floor( givenNumber / 2 ) != Math.ceil( givenNumber / 2 );
}

export {
  isOdd,
};
