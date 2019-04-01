
function rejectPromise() {
  return Promise.reject(new Error('REJECTED!'));
}

export {
  rejectPromise,
};
