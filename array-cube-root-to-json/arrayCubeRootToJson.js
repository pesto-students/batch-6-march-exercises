const castToNumber = value => parseInt(value, 10);

function verifyAllNumbers(numbers) {
  const isOfTypeNum = number => typeof number !== 'number';
  const convertsToNaN = number => Number.isNaN(castToNumber(number));
  for (const number of numbers) {
    if (isOfTypeNum(number) && convertsToNaN(number)) {
      return false;
    }
  }
  return true;
}

function arrayCubeRootToJson(numbers) {
  if (!verifyAllNumbers(numbers)) {
    throw new TypeError('All elements must be of type number');
  }

  const numberCubes = {};
  for (const number of numbers) {
    numberCubes[number] = Math.cbrt(number);
  }
  return numberCubes;
}

export {
  arrayCubeRootToJson,
};
