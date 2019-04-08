
function lowercaseKeys(object) {
  return Object.keys(object).reduce((newObject, key)=>{
    newObject[key.toLowerCase()] = object[key];
    return newObject;
  }, {});
}

export {
  lowercaseKeys,
};
