
function counterFactory() {
  let counter = 0;

  function increment() {
    counter += 1;
    return counter;
  }

  function decrement() {
    counter -= 1;
    return counter;
  }

  return { increment, decrement };
}

export {
  counterFactory,
};
