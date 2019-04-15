
function timeout(string) {
  return new Promise(resolve => resolve(`Hello ${string}`));
}

export {
  timeout,
};
