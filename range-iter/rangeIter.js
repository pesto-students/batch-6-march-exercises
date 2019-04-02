
function* rangeIter(start, end) {
  if (typeof start !== 'number') {
    throw new TypeError(`${start} is not a number`);
  }
  if (typeof end !== 'number') {
    throw new TypeError(`${end} is not a number`);
  }
  if (start > end) {
    return [];
  }
  let current = start;
  while (current <= end) {
    yield current;
    current += 1;
  }
}

export {
  rangeIter,
};
