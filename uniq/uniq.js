
function uniq(array) {
  const set = new Set();
  let uniqArray = [];
  for (const element of array) {
    if (element === 0) {
      const isNegativeZero = 1 / element === -Infinity;
      if (isNegativeZero) {
        if (!set.has('negative zero')) {
          set.add('negative zero');
          uniqArray = uniqArray.concat(element);
        }
      } else if (!set.has('positive zero')) {
        set.add('positive zero');
        uniqArray = uniqArray.concat(element);
      }
    } else if (!set.has(String(element))) {
      set.add(String(element));
      uniqArray = uniqArray.concat(element);
    }
  }
  return uniqArray;
}

export {
  uniq,
};
