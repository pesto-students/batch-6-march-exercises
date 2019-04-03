
function union(array1, array2) {
  const elementExists = (el, arr) => arr.includes(el);
  for (const el of array2) {
    if (!elementExists(el, array1)) {
      array1.push(el);
    }
  }
  return array1;
}

export {
  union,
};
