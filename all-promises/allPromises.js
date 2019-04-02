
function allPromises(...args) {
  return Promise.all(args).then(val => val);
}

export {
  allPromises,
};
