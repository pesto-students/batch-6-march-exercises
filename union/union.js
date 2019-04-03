
function union(firstList, secondList) {
  const combinedList = [...firstList, ...secondList];
  return combinedList.reduce((acc, val) => (acc.some(el => Object.is(el, val)) ? acc : [...acc, val]), []);
}

export {
  union,
};
