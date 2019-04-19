
function uniqueRandom(low, high) {
  let prev = null;
  const diff = high - low;

  const randGenerator = () => Math.floor(Math.random() * diff) + low;

  return () => {
    let res = randGenerator();
    while (res === prev) {
      res = randGenerator();
    }
    prev = res;
    return res;
  };
}

export {
  uniqueRandom,
};
