
function repeatStringNumTimes(stringToRepeat, repetitionTimes) {
  if (repetitionTimes < 1) {
    return '';
  }
  let resultString = '';
  for (let i = 1; i <= repetitionTimes; i += 1) {
    resultString += stringToRepeat;
  }

  return resultString;
}

export {
  repeatStringNumTimes,
};
