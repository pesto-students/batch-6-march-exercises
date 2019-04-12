
function timeout(string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(string), 500);
  }).then(value => `Hey ${value}`);
}

export {
  timeout,
};
