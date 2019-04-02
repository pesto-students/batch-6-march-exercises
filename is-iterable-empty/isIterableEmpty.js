
function isIterableEmpty(objects) {
  let objectCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const obj of objects) {
    objectCount += 1;
  }
  return objectCount === 0;
}

export {
  isIterableEmpty,
};
