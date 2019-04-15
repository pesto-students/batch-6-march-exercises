
function greet(text) {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject(new Error());
    }
    resolve(`Hey ${text}`);
  });
}

export {
  greet,
};
