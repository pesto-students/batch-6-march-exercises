
function mapFilterAndReduce(array) {
  const isLengthLessThanFive = str => str.length < 5;
  const filteredResult = array.filter(object => isLengthLessThanFive(object.firstName));
  return filteredResult.reduce((partialResult, currentObject) => {
    const { firstName } = currentObject;
    return { ...partialResult, [firstName]: firstName.length };
  }, {});
}

export {
  mapFilterAndReduce,
};
