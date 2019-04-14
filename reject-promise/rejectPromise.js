
function rejectPromise() {
  return new Promise(resolve => resolve('REJECTED!'));
}

export {
  rejectPromise,
};
