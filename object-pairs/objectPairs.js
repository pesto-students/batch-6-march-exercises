function objectPairs(obj) {
  return Object.keys(obj).reduce((accumulator, key) => {
    accumulator.push([key, obj[key]]);
    return accumulator;
  }, []);
}

export { objectPairs };
