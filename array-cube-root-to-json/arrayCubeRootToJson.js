/* eslint-disable no-param-reassign */
function arrayCubeRootToJson(numbers) {
  if (!Array.isArray(numbers)) {
    throw Error();
  }
  numbers = numbers.map((number) => {
    if (typeof number === 'boolean') {
      throw Error();
    }
    if (number === Infinity) {
      return number;
    }
    return parseInt(number, 10);
  });

  if (numbers.some(Number.isNaN)) {
    throw Error();
  }
  return numbers.reduce((json, currentNumber) => {
    json[currentNumber] = Math.cbrt(currentNumber);
    return json;
  }, {});
}


export {
  arrayCubeRootToJson,
};
