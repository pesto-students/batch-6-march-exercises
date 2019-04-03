
function uniq(items) {
  return items.reduce((acc, val) => (acc.some(el => Object.is(el, val)) ? acc : [...acc, val]), []);
}

export {
  uniq,
};
