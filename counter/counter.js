
function counter() {
  let current = 1;

  function innerCounter() {
    const value = current;
    current += 1;
    return value;
  }

  return innerCounter;
}

export {
  counter,
};
