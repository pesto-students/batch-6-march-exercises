
function greet(string) {
  return new Promise((resolve) => {
    resolve(string);
  }).then(value => `Hey ${value}`);
}

export {
  greet,
};
