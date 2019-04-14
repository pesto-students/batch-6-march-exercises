function truthCheck(objectArray, key) {
  return objectArray.every(obj => obj[key]);
}

export { truthCheck };
