
function rejectPromise() {
  return new Promise((resolve, reject) => {
    reject();
  }).catch(() => 'REJECTED!');
}

export {
  rejectPromise,
};
