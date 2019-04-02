const castToNumber = value => parseInt(value, 10);

function verifyAllNumbers(numbers) {
  for (const number of numbers) {
    if (Number.isNaN(castToNumber(number))) {
      throw new TypeError('Array must contain only numbers');
    }
  }
}

function arrayCubeRootToJson(numbers) {
  verifyAllNumbers(numbers);
  const numberCubes = {};
  for (const number of numbers) {
    numberCubes[number] = Math.cbrt(number);
  }
  return numberCubes;
}

export {
  arrayCubeRootToJson,
};
