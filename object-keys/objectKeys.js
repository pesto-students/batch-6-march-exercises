
function objectKeys(...args) {
  var obj = args[0];
  var objectIndexes = [];
  Object.getOwnPropertyNames(obj).forEach(key => {
    objectIndexes.push(key);
  });
  return objectIndexes;
}

export {
  objectKeys,
};
