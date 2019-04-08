
let rejectPromise = new Promise(function(resolve, reject) {
  resolve("REJECTED!");
});

export {
  rejectPromise,
};
