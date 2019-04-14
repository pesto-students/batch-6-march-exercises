
function aperture(tuplesLength, arr) {
  let tuples = [];
  let index = 0;
  while (index < arr.length - tuplesLength + 1) {
    const tempArr = arr.slice(index, tuplesLength + index);
    tuples = [...tuples, tempArr];
    index += 1;
  }
  return tuples;
}

export {
  aperture,
};
