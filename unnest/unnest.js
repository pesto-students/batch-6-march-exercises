
function unnest(array) {
  return Array.from(array).reduce((acc, current) => acc.concat(current), []);
}

export {
  unnest,
};
