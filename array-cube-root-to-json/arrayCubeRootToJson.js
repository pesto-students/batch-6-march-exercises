
function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  const tests = str => /\d/.test(str) || str === Infinity;
  const validElements = array.filter(tests);

  if (validElements.length !== array.length) {
    throw new Error();
  }

  return array.reduce((acc, cube) => {
    acc[cube.toString()] = Math.cbrt(cube);
    return acc;
  }, {});
}

export {
  arrayCubeRootToJson,
};
