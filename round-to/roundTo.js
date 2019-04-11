
const getFactorToBeUser = n => 10 ** n;
const calculateNumber = fn => factor => number => fn((number * factor).toFixed(1)) / factor;

function roundTo(floatingNumber, numberOfDecimals) {
  const factorToBeUsed = getFactorToBeUser(numberOfDecimals);
  return calculateNumber(Math.round)(factorToBeUsed)(floatingNumber);
}

roundTo.up = (floatingNumber, numberOfDecimals) => {
  const factorToBeUsed = getFactorToBeUser(numberOfDecimals);
  return calculateNumber(Math.ceil)(factorToBeUsed)(floatingNumber);
};

roundTo.down = (floatingNumber, numberOfDecimals) => {
  const factorToBeUsed = getFactorToBeUser(numberOfDecimals);
  return calculateNumber(Math.floor)(factorToBeUsed)(floatingNumber);
};

export {
  roundTo,
};
