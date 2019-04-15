
function allPromises(array) {
  return Promise.all(array).then(values => values);
}

export {
  allPromises,
};
