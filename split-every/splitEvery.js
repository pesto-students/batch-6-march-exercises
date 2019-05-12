
function splitEvery(parts, collection) {
  if (parts <= 0) {
    throw new Error('The first argument should be positive');
  }
  const array = [];
  let counter = 0;
  for (const value of collection) {
    const breakPoint = counter % parts;
    const isBreakPoint = breakPoint === 0;
    if (value && isBreakPoint) {
      array.push(collection.slice(counter, counter + parts));
    }
    counter += 1;
  }
  return array;
}

export {
  splitEvery,
};
