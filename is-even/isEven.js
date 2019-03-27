
function isEven(...args) {
  var givenNumber=args[0];
  return Math.ceil(givenNumber/2)==Math.floor(givenNumber/2);
}

export {
  isEven,
};
