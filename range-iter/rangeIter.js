function rangeIter(startVal, endVal) {
  const isNotNumber = val => typeof val === 'number';
  if (!isNotNumber(startVal) || !isNotNumber(endVal)) {
    throw TypeError('undefined is not a number');
  }


  if (startVal > endVal) {
    return [];
  }
  if (startVal === endVal) {
    return [startVal];
  }

  let initalVal = startVal;

  return {
    [Symbol.iterator]() {
      initalVal = startVal;
      return this;
    },
    next() {
      if (initalVal <= endVal) {
        const obj = { value: initalVal, done: false };
        initalVal += 1;
        return obj;
      }
      return { done: true };
    },
  };
}

export {
  rangeIter,
};
