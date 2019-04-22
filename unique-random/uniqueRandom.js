
const getRandomInRange = (lb, ub) => Math.floor(Math.random() * (ub - lb)) + lb;

function uniqueRandom(...args) {
  let previousNumber;
  return function provideUnique() {
    let newNumber = getRandomInRange(...args);
    while (newNumber === previousNumber) {
      newNumber = getRandomInRange(...args);
    }
    previousNumber = newNumber;
    return newNumber;
  };
}

export {
  uniqueRandom,
};
