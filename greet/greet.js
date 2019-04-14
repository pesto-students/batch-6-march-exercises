
function greet(arg) {
  return new Promise((resolve) => {
    resolve(`Hey ${arg}`);
  });
}

export {
  greet,
};
