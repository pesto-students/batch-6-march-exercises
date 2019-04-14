
function timeout(arg) {
  return new Promise(resolve => resolve(`Hello ${arg}`));
}

export {
  timeout,
};
