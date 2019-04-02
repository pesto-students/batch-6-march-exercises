
function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  const invalidArray = array.filter(item => /\D/.test(item));
  if (invalidArray.length > 0) {
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
