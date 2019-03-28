
function objectInvert(objectToInvert) {
  return Object.entries(objectToInvert).reduce((invertedObject, currentArray) => {
    invertedObject[currentArray[1]] = currentArray[0]; // eslint-disable-line
    return invertedObject;
  }, {});
}

export {
  objectInvert,
};
