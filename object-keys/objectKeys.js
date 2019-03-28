
function objectKeys(...args) {
  var obj = args[0];
  var objectIndexes = [];
  obj.getOwnPropertyNames(obj).forEach(key => {
    objectIndexes.push(key);
  });
  return objectIndexes;
}

export {
  objectKeys,
};
